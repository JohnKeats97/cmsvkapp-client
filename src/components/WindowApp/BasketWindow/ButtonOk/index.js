import React from 'react'

import './style.css';


export default (props) => {

    return <button
        className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ButtonOk-root"
        style={props.config.style}
    >
        {props.config.text}
        <span className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ButtonOk-price">
            100 pуб
        </span>
    </button>
};
