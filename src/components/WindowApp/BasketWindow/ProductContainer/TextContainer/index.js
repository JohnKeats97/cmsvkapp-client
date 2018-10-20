import React from 'react'

import './style.css';


export default (props) => {

    return <div
        className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-TextContainer-root"
    >
        
        <div
            className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-TextContainer-text"
            style={props.config.order.style}
        >
            Заказ
            <span className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-TextContainer-price">354 руб</span>
        </div>

        <div
            className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-TextContainer-text"
            style={props.config.delivery.style}
        >
            Доставка
            <span className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-TextContainer-price">0 руб</span>
        </div>

        <div
            className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-TextContainer-text"
            style={props.config.result.style}
        >
            Итого
            <span className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-TextContainer-price">354 руб</span>
        </div>

    </div>
};
