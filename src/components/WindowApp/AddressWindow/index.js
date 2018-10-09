import React from 'react'

import './style.css';


export default (props) => {
    return <div
        className="components-RightPanel-BodyRight-WindowApp-AddressWindow-root"
        style={props.pageConfig.background.style} >
        <div
            className="components-RightPanel-BodyRight-WindowApp-AddressWindow-title"
            style={props.pageConfig.title.style}
        >
            {props.pageConfig.title.text}
        </div>
        <input
            className="components-RightPanel-BodyRight-WindowApp-AddressWindow-inputAddress"
            style={props.pageConfig.inputAddress.style}
            placeholder={props.pageConfig.inputAddress.placeholder}
        />
        <button
            className="components-RightPanel-BodyRight-WindowApp-AddressWindow-buttonOk"
            style={props.pageConfig.buttonOK.style}
        >
            {props.pageConfig.buttonOK.text}
        </button>
    </div>
};
