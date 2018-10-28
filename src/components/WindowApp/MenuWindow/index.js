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

    onAddProduct(e) {
        e.stopPropagation();
        // добавить продукт в корзину
    }

    getProducts() {
        const {props} = this;
        const {menu} = props;

        const titles = Object.keys(menu);

        let list = [];

        if (!titles.length) {
            return list;
        }

        for (let i = 0; i < titles.length; i++) {
            list.push(<div
                className="components-RightPanel-BodyRight-WindowApp-MenuWindow-title"
                style={props.pageConfig.title.style}
            >{titles[i]}</div>)
            for (let menuItemKey in menu[titles[i]]) {
                list.push(<Dish
                    onOpenNewPage={props.onOpenNewPage}
                    pageConfig={props.pageConfig}
                    onAddProduct={this.onAddProduct}
                    menuItem={menu[titles[i]][menuItemKey]}
                />);
            }
        }

        return list;
    }

    render() {
        const {props} = this;

        let list = this.getProducts();

        return <div
            className="components-RightPanel-BodyRight-WindowApp-MenuWindow-root"
            style={props.pageConfig.background.style}
        >

            <Header
                config={props.pageConfig.header}
                onClickBack={this.onClickBack.bind(this)}
                onClickBasket={this.onClickBasket.bind(this)}
            />

            {list}

        </div>
    }
};

