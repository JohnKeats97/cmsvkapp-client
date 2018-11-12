import React from 'react'

import Header from './Header';
import Dish from './Dish';
import Basket from '../../../utils/basket'

import './style.css';


export default class MenuWindow extends React.Component {
    constructor() {
        super();

        this.state = {
            price: Basket.get().price
        }
    }

    onClickBack() {
        this.props.onOpenNewPage('addressPage', {});
    }

    onClickBasket() {
        this.props.onOpenNewPage('basketPage', {});
    }

    onAddProduct(e) {
        e.stopPropagation();
        Basket.addProduct(this.item);
        this.this2.setState(state => (state.price = Basket.get().price, state))
    }

    getPrice() {
        const {price} = Basket.get();
        if (price === this.state.price) {
            return;
        }
        this.setState((state) => (state.price = price, state))
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
                    onAddProduct={this.onAddProduct.bind({this2: this, item: menu[titles[i]][menuItemKey]})}
                    menuItem={menu[titles[i]][menuItemKey]}
                />);
            }
        }

        return list;
    }

    render() {
        const {props} = this;

        this.getPrice();

        let list = this.getProducts();

        return <div
            className="components-RightPanel-BodyRight-WindowApp-MenuWindow-root"
            style={props.pageConfig.background.style}
        >

            <Header
                userAddress={props.userAddress}
                config={props.pageConfig.header}
                onClickBack={this.onClickBack.bind(this)}
                onClickBasket={this.onClickBasket.bind(this)}
                price={this.state.price}
            />

            {list}

        </div>
    }
};

