import React from 'react';

import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import Header from './Header';
import Basket from '../../../utils/basket';
import Fetch from "../../../utils/fetch";

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

    onClickOk() {
        const {props} = this;
        const device_id = 0;
        const install_id = 0;
        const uuid = Math.floor(Math.random() * 10000000);
        const phone1 = document.getElementById('phone').value;
        const name = '';
        const building = props.address.geodata.building;
        const city_id = props.address.city.id;
        const subway = props.address.child.id;
        const street = props.address.geodata.street;
        const is_delivery_asap = '1';
        const send = '1';
        const person_count = '1';
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
        const order = {
            service: {
                id: 14839, // id сети
                affiliate_id: +this.props.idBranch
            },
            products
        };
        const online_payment = '0';

        console.log({
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
        })

        Fetch.Post('/checkout/', {
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
        })
            .then((response) => {
                console.log(response)
            }).catch((err => {console.log(err)}))

        alert('Ваша покупка совершена');
        props.onOpenNewPage('menuPage', {});
    }

    newBasket() {
        const basket = Basket.get();
        if (JSON.stringify(this.state.basket) === JSON.stringify(basket)) {
            return;
        }
        this.setState((state) => (state.basket = basket, state))
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
        Fetch.Post('/cart/calculate/', {
            service: {
                id: 14839, // id сети
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

        this.newBasket();
        this.getDeliveryPrice();

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
