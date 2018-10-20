import React from 'react'

import InputContainer from './InputContainer'

import './style.css';


export default (props) => {

    return <div
        className="components-RightPanel-BodyRight-WindowApp-PayWindow-LeftPanel-root"
    >
        <div
            className="components-RightPanel-BodyRight-WindowApp-PayWindow-LeftPanel-text"
            style={props.config.title.style}
        >
            {props.config.title.text}
        </div>
        <InputContainer
            config={props.config.telephone}
        />
        <div
            className="components-RightPanel-BodyRight-WindowApp-PayWindow-LeftPanel-text"
            style={props.config.address.style}
        >
            {props.config.address.text}
        </div>
        <InputContainer
            config={props.config.entrance}
        />
        <InputContainer
            config={props.config.intercom}
        />
        <InputContainer
            config={props.config.apartment}
        />
        <InputContainer
            config={props.config.floor}
        />
        <div
            className="components-RightPanel-BodyRight-WindowApp-PayWindow-LeftPanel-text"
            style={props.config.pay.style}
        >
            Оплата: наличными
        </div>



        <InputContainer
            config={props.config.comment}
        />
    </div>
};
