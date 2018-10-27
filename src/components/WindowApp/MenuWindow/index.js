import React from 'react'

import Header from './Header';
import Dish from './Dish'

import './style.css';


export default class MenuWindow extends React.Component {
    constructor() {
        super();
    }

    onClickBack() {
        this.props.onOpenNewPage('addressPage', {});
    }

    onClickBasket() {
        this.props.onOpenNewPage('basketPage', {});
    }

    onClickProduct() {
        this.props.onOpenNewPage('productPage', {productInfo: {}});
    }

    onAddProduct(e) {
        e.stopPropagation();
        // добавить продукт в корзину
    }

    render() {
        const {props} = this;

        let list = [];

        for (let i = 0; i < 10; i++) {
            list.push(<Dish
                pageConfig={props.pageConfig}
                onClickProduct={this.onClickProduct.bind(this)}
                onAddProduct={this.onAddProduct}
            />);
        }

        return <div
            className="components-RightPanel-BodyRight-WindowApp-MenuWindow-root"
            style={props.pageConfig.background.style}
        >

            <Header
                config={props.pageConfig.header}
                onClickBack={this.onClickBack.bind(this)}
                onClickBasket={this.onClickBasket.bind(this)}
            />

            <div
                className="components-RightPanel-BodyRight-WindowApp-MenuWindow-title"
                style={props.pageConfig.title.style}
            >Популярные</div>

            {list}

        </div>
    }
};

