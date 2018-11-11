import React from 'react'

import FoodContainer from "./FoodContainer/index";
import TextContainer from "./TextContainer/index";

import './style.css';


export default (props) => {
    return <div
        className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-root"
        style={props.config.productContainer.style}
        onClick={props.onClick}
    >
        <FoodContainer
            basket={props.basket}
            config={props.config.foodContainer}
        />
        <TextContainer
            basket={props.basket}
            config={props.config.textContainer}
        />
    </div>
};
