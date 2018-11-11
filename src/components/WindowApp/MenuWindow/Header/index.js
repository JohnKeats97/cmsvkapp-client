import React from 'react'

import ButtonBack from "./ButtonBack";

import './style.css';


export default (props) => {
    return <div
        className="components-RightPanel-BodyRight-WindowApp-MenuWindow-Header-root"
        style={props.config.style}
        >
        <ButtonBack
            config={props.config.buttonback}
            onClick={props.onClickBack}
        />
        <div
            className="components-RightPanel-BodyRight-WindowApp-MenuWindow-Header-address"
            style={props.config.address.style}
        >
            {props.userAddress}
        </div>

        <div
            className="components-RightPanel-BodyRight-WindowApp-MenuWindow-Header-basket"
            style={props.config.basket.style}
            onClick={props.onClickBasket}
        >
            Корзина
            <div
                className="components-RightPanel-BodyRight-WindowApp-MenuWindow-Header-price"
            >
                {props.price} Р
            </div>
        </div>

    </div>
};
