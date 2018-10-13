import React from 'react'

import ProductContainer from './ProductContainer'
import ImageContainer from './ImageContainer'
import ButtonClose from './ButtonClose'
import InputCount from './InputCount'
import ButtonOk from './ButtonOk'

import './style.css';


export default (props) => {

    return <div
        className="components-RightPanel-BodyRight-WindowApp-ProductWindow-root"
        style={props.pageConfig.background.style} >
        <ButtonClose config={props.pageConfig.buttonClose} />
        <ProductContainer config={props.pageConfig.productContainer} />
        <ImageContainer config={props.pageConfig.imageContainer} />
        <div
            className="components-RightPanel-BodyRight-WindowApp-ProductWindow-title"
            style={props.pageConfig.title.style}
        >
            {props.pageConfig.title.text}
        </div>
        <div
            className="components-RightPanel-BodyRight-WindowApp-ProductWindow-description"
            style={props.pageConfig.description.style}
        >
            {props.pageConfig.description.text}
        </div>
        <InputCount config={props.pageConfig.inputCount}/>
        <ButtonOk config={props.pageConfig.buttonOK}/>
    </div>
};
