import React from 'react'

import ProductContainer from "./ProductContainer";
import ButtonOk from "./ButtonOk";
import Basket from '../../../utils/basket';

import './style.css';


export default class ProductWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            basket: Basket.get()
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

    render() {
        const {props, state} = this;

        this.newBasket();

        return <div
            className="components-RightPanel-BodyRight-WindowApp-BasketWindow-root"
            style={props.pageConfig.background.style}
            onClick={this.onClickBackground.bind(this)}
        >

            <ProductContainer
                config={props.pageConfig}
                onClick={(e)=>{e.stopPropagation()}}
                basket={state.basket}
                onDeleteProduct={this.onDeleteProduct.bind(this)}
            />
            <ButtonOk
                config={props.pageConfig.buttonOK}
                onClick={this.onClickButtonOk.bind(this)}
                price={state.basket.price}
            />

        </div>
    }
}
