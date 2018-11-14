import React from 'react'

import ProductContainer from "./ProductContainer";
import ButtonOk from "./ButtonOk";
import Basket from '../../../utils/basket';
import Fetch from '../../../utils/fetch';

import './style.css';


export default class ProductWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            basket: Basket.get(),
            deliveryPrice: 0
        }
    }

    onClickBackground() {
        this.props.onOpenNewPage('menuPage', {});
    }

    onClickButtonOk(e) {
        e.stopPropagation();
        const {price} = Basket.get();
        if (!price) {
            alert('Ваша корзина пуста');
            return;
        }
        this.props.onOpenNewPage('payPage', {});
    }

    onDeleteProduct(id) {
        Basket.deleteProduct(id);
        this.setState(state => (state.basket = Basket.get() ,state))
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
            className="components-RightPanel-BodyRight-WindowApp-BasketWindow-root"
            style={props.pageConfig.background.style}
            onClick={this.onClickBackground.bind(this)}
        >

            <ProductContainer
                config={props.pageConfig}
                onClick={(e)=>{e.stopPropagation()}}
                basket={state.basket}
                deliveryPrice={state.deliveryPrice}
                onDeleteProduct={this.onDeleteProduct.bind(this)}
            />
            <ButtonOk
                config={props.pageConfig.buttonOK}
                onClick={this.onClickButtonOk.bind(this)}
                price={(state.basket.price + state.deliveryPrice) || 0}
            />

        </div>
    }
}
