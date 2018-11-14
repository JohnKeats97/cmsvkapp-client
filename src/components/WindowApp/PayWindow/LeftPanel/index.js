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
            id={'phone'}
            config={props.config.telephone}
        />
        <div
            className="components-RightPanel-BodyRight-WindowApp-PayWindow-LeftPanel-text"
            style={props.config.address.style}
        >
            {props.userAddress}
        </div>
        <InputContainer
            id={'entrance'}
            config={props.config.entrance}
        />
        <InputContainer
            id={'intercom'}
            config={props.config.intercom}
        />
        <InputContainer
            id={'apartment'}
            config={props.config.apartment}
        />
        <InputContainer
            id={'floor'}
            config={props.config.floor}
        />
        <div
            className="components-RightPanel-BodyRight-WindowApp-PayWindow-LeftPanel-text"
            style={props.config.pay.style}
        >
            Оплата: наличными
        </div>



        <InputContainer
            id={'comment'}
            config={props.config.comment}
        />
    </div>
};
