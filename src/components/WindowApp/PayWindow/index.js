import React from 'react';

import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import Header from './Header';
import Basket from '../../../utils/basket';
import Fetch from "../../../utils/fetch";
import pageConfig from '../../../config/pages'

import './style.css';


export default class PayWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            basket: Basket.get(),
            deliveryPrice: 0
        };
    }

    onClickBack() {
        this.props.onOpenNewPage('basketPage', {});
    }

    createPhoneSpaces(phone) {
        let phone1 = phone.replace(/\s+/g, '');
        phone1 = phone1.split('');
        if (phone1[0] === '+') {
            phone1.splice(2, 0, ' ');
            phone1.splice(6, 0, ' ');
            phone1.splice(10, 0, ' ');
            phone1.splice(13, 0, ' ');
            return phone1;
        }
        if (phone1[0] === '8') {
            phone1.splice(1, 0, ' ');
            phone1.splice(5, 0, ' ');
            phone1.splice(9, 0, ' ');
            phone1.splice(12, 0, ' ');
            return phone1;
        }
        return '';
    }

    onClickOk() {
        const {props} = this;
        const device_id = '0';
        const install_id = '0';
        const uuid = Math.floor(Math.random() * 10000000).toString();
        const phone1 = this.createPhoneSpaces(document.getElementById('phone').value);

        if (!phone1) {
            alert('Введите корректный номер телефона');
            return;
        }

        const name = 'name';
        const building = props.address.geodata.building;
        const city_id = props.address.city.id;
        const subway = props.address.child.id;
        const street = props.address.geodata.street;
        const is_delivery_asap = '1';
        const send = '1';
        const person_count = '2';
        const entrance = document.getElementById('entrance').value;
        const doorcode = document.getElementById('intercom').value;
        const floor = document.getElementById('floor').value;
        const comment = document.getElementById('comment').value;
        let products = [];
        const productBasket = this.state.basket.products;
        for (let product in productBasket) {
            products.push({
                id: productBasket[product].id,
                price: productBasket[product].price,
                quantity: productBasket[product].count
            })
        }
        const order = JSON.stringify({
            service_id: +pageConfig.serviceId, // id сети
            affiliate_id: +this.props.idBranch,
            products
        });
        const online_payment = '0';

        let bodyObject = {
            device_id,
            install_id,
            uuid,
            phone1,
            name,
            building,
            city_id,
            subway,
            street,
            is_delivery_asap,
            send,
            person_count,
            entrance,
            doorcode,
            floor,
            comment,
            order,
            online_payment
        };

        let body = '';
        for (let key in bodyObject) {
            body += `${key}=${bodyObject[key]}&`
        }
        body = body.slice(0, -1);

        Fetch.PostQueryString('/checkout/', body)
            .then((response) => {
                if (response.error) {
                    alert(response.error);
                    return;
                }
                if (response.response.order) {
                    alert('Ваш заказ обработан ' + response.response.order.description);
                    props.onOpenNewPage('menuPage', {});
                    return;
                }
                if (response.response.warning.warning_phone_need_verification) {
                    const code = prompt('На ваш телефон отправлен код подтверждения', 'Введите код из смс');
                    if (!code) {
                        alert('Вы не ввели код, повторите попытку заказа');
                        return;
                    }
                    Fetch.PostQueryString('/sms_verification/', `phone=${phone1}&code=${code}`)
                        .then((response) => {
                            if (response.error) {
                                alert(response.error);
                                return;
                            }
                            if (!response.response.verified) {
                                alert('Вы ввели не верный код, повторите попытку заказа');
                                return;
                            }
                            Fetch.PostQueryString('/checkout/', body)
                                .then((response) => {
                                    if (response.error) {
                                        alert(response.error);
                                        return;
                                    }
                                    if (response.response.order) {
                                        alert('Ваш заказ обработан ' + response.response.order.description);
                                        props.onOpenNewPage('menuPage', {});
                                    }
                                })
                        })
                }
                else if (response.response.warning) {
                    alert('Произошла ошибка, повторите попытку');
                }
            });
    }

    newBasket() {
        const basket = Basket.get();
        if (JSON.stringify(this.state.basket) === JSON.stringify(basket)) {
            return true;
        }
        this.setState((state) => (state.basket = basket, state), () => {this.getDeliveryPrice()})
    }

    getDeliveryPrice() {
        let products = [];
        const productBasket = this.state.basket.products;
        for (let product in productBasket) {
            products.push({
                id: productBasket[product].id,
                price: productBasket[product].price,
                quantity: productBasket[product].count
            })
        }
        if(!this.props.idBranch) {
            return; // на другом экране
        }
        Fetch.Post('/cart/calculate/', {
            service: {
                id: +pageConfig.serviceId, // id сети
                affiliate_id: +this.props.idBranch
            },
            products
        })
            .then(({response}) => {
                if (response.products.length !== Object.keys(this.state.basket.products).length) {
                    return;
                }
                if (response.subtotal_price !== this.state.basket.price) {
                    console.log('response.subtotal_price = ', response.cart_price);
                    console.log('basket.price = ', this.state.basket.price);
                    alert('ошибка вычисления стоймости, выберите другие блюда');
                    return;
                }
                if (this.state.deliveryPrice === response.delivery_price) {
                    return;
                }

                this.setState((state) => (state.deliveryPrice = response.delivery_price, state))
            })
    }

    render() {
        const {props, state} = this;

        const isNewBasket = this.newBasket();
        isNewBasket && this.getDeliveryPrice();

        return <div
            className="components-RightPanel-BodyRight-WindowApp-PayWindow-root"
            style={props.pageConfig.background.style} >

            <Header
                config={props.pageConfig.header}
                onClickBack={this.onClickBack.bind(this)}
            />
            <LeftPanel
                config={props.pageConfig.leftPanel}
                userAddress={props.userAddress}
            />
            <RightPanel
                basket={state.basket}
                deliveryPrice={state.deliveryPrice}
                config={props.pageConfig.rightPanel}
                onClickOk={this.onClickOk.bind(this)}
            />

        </div>
    }
};
