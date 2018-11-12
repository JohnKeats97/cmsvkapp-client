import React from 'react'

import ProductContainer from './ProductContainer/index'
import ImageContainer from './ImageContainer/index'
import ButtonClose from './ButtonClose/index'
import InputCount from './InputCount/index'
import ButtonOk from './ButtonOk/index'
import Basket from '../../../utils/basket'

import './style.css';


export default class ProductWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }

    onChangeCount(change) {
        this.setState((state) => {
            state.count += change;
            if (state.count < 1) {
                state.count = 1;
            }
            return state;
        });
    }

    onClickButtonClose () {
        this.props.onOpenNewPage('menuPage', {});
    }

    onClickButtonOk () {
        Basket.addProduct(this.productInfo, this.this2.state.count);
        this.this2.onClickButtonClose()
    }

    render() {
        const {props, state} = this;
        const {productInfo} = props;

        return <div
            className="components-RightPanel-BodyRight-WindowApp-ProductWindow-root"
            style={props.pageConfig.background.style} >
            <ButtonClose
                config={props.pageConfig.buttonClose}
                onClick={this.onClickButtonClose.bind(this)}
            />
            <ProductContainer config={props.pageConfig.productContainer} />
            <ImageContainer
                config={props.pageConfig.imageContainer}
                src={productInfo.image && `https://www.delivery-club.ru/${productInfo.image[650]}` || props.pageConfig.imageContainer.image.src}
            />
            <div
                className="components-RightPanel-BodyRight-WindowApp-ProductWindow-title"
                style={props.pageConfig.title.style}
            >
                {productInfo.title}
            </div>
            <div
                className="components-RightPanel-BodyRight-WindowApp-ProductWindow-description"
                style={props.pageConfig.description.style}
            >
                {productInfo.description}
            </div>
            <InputCount
                count={state.count}
                onChangeCount={this.onChangeCount.bind(this)}
                config={props.pageConfig.inputCount}
            />
            <ButtonOk
                config={props.pageConfig.buttonOK}
                onClick={this.onClickButtonOk.bind({this2: this, productInfo})}
                price={+productInfo.price * state.count}
            />
        </div>
    }
}
