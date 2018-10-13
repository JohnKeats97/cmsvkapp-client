import React from 'react'

import './style.css';
import ProductContainer from "./ProductContainer";
import ButtonOk from "./ButtonOk";


export default (props) => {

    return <div
        className="components-RightPanel-BodyRight-WindowApp-BasketWindow-root"
        style={props.pageConfig.background.style} >

        <ProductContainer config={props.pageConfig} />
        <ButtonOk config={props.pageConfig.buttonOK}/>

    </div>
};
