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
        this.props.onOpenNewPage('payPage', {});
    }

    render() {
        const {props, state} = this;

        return <div
            className="components-RightPanel-BodyRight-WindowApp-BasketWindow-root"
            style={props.pageConfig.background.style}
            onClick={this.onClickBackground.bind(this)}
        >

            <ProductContainer
                config={props.pageConfig}
                onClick={(e)=>{e.stopPropagation()}}
                basket={state.basket}
            />
            <ButtonOk
                config={props.pageConfig.buttonOK}
                onClick={this.onClickButtonOk.bind(this)}
                price={state.basket.price}
            />

        </div>
    }
}
