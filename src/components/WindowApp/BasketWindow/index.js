import React from 'react'

import './style.css';
import ProductContainer from "./ProductContainer";
import ButtonOk from "./ButtonOk";

export default class ProductWindow extends React.Component {
    constructor() {
        super();
    }

    onClickBackground() {
        this.props.onOpenNewPage('menuPage', {});
    }

    onClickButtonOk(e) {
        e.stopPropagation();
        this.props.onOpenNewPage('payPage', {});
    }

    render() {
        const {props} = this;

        return <div
            className="components-RightPanel-BodyRight-WindowApp-BasketWindow-root"
            style={props.pageConfig.background.style}
            onClick={this.onClickBackground.bind(this)}
        >

            <ProductContainer
                config={props.pageConfig}
                onClick={(e)=>{e.stopPropagation()}}
            />
            <ButtonOk
                config={props.pageConfig.buttonOK}
                onClick={this.onClickButtonOk.bind(this)}
            />

        </div>
    }
}
