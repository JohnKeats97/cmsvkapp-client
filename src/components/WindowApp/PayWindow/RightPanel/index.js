import React from 'react'

import './style.css';
import ButtonOk from "./ButtonOk";
import TextContainer from "../../BasketWindow/ProductContainer/TextContainer";


export default (props) => {
    return <div
        className="components-RightPanel-BodyRight-WindowApp-PayWindow-RightPanel-root"
        style={props.config.style} >
        <div className="components-RightPanel-BodyRight-WindowApp-PayWindow-RightPanel-price">
            <TextContainer config={props.config.textContainer} />
        </div>
        <ButtonOk config={props.config.buttonOK}/>
    </div>
};
