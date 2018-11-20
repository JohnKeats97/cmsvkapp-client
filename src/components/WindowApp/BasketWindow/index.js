import React from 'react'

import ProductContainer from "./ProductContainer";
import ButtonOk from "./ButtonOk";
import Basket from '../../../utils/basket';
import Fetch from '../../../utils/fetch';
import pageConfig from '../../../config/pages';
import debounce from "../../../utils/debounce";

import './style.css';


export default class ProductWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            basket: Basket.get(),
            deliveryPrice: 0
        };
        this.getDeliveryPriceDebounce = debounce(this.getDeliveryPrice, 1500);
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
            return true;
        }
        this.setState((state) => (state.basket = basket, state), () => {this.getDeliveryPriceDebounce()})
    }

    getDeliveryPrice() {
        const {state} = this;
        let products = [];
        const productBasket = state.basket.products;
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
                if (response.products.length !== Object.keys(state.basket.products).length) {
                    return;
                }
                if (response.subtotal_price !== state.basket.price) {
                    console.log('Произошла ошибка вычисления стоймости:');
                    console.log('response.subtotal_price = ', response.subtotal_price);
                    console.log('basket.price = ', state.basket.price);
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
        isNewBasket && this.getDeliveryPriceDebounce();

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
