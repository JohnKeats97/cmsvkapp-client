import React from 'react'

import './style.css';
import ButtonBack from "./ButtonBack";


export default (props) => {
    return <div
        className="components-RightPanel-BodyRight-WindowApp-MenuWindow-Header-root"
        style={props.config.style}
        >
        <ButtonBack config={props.config.buttonback}/>
        <div
            className="components-RightPanel-BodyRight-WindowApp-MenuWindow-Header-address"
            style={props.config.address.style}
        >
            Москва, 4-й Добрынинский переулок, 8
        </div>

        <div
            className="components-RightPanel-BodyRight-WindowApp-MenuWindow-Header-basket"
            style={props.config.basket.style}
        >
            Корзина
            <div
                className="components-RightPanel-BodyRight-WindowApp-MenuWindow-Header-price"
            >
                2320 Р
            </div>
        </div>

    </div>
};
