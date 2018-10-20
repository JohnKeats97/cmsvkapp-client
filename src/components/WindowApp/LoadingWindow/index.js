import React from 'react'

import Loader from './Loader/index'

import './style.css';


export default (props) => {

    return <div
        className="components-RightPanel-BodyRight-WindowApp-LoadingWindow-root"
        style={props.pageConfig.background.style} >
        <div
            className="components-RightPanel-BodyRight-WindowApp-LoadingWindow-title"
            style={props.pageConfig.title.style}
        >
            {props.pageConfig.title.text}
        </div>
        <Loader
            className="components-RightPanel-BodyRight-WindowApp-LoadingWindow-loader"
            style={props.pageConfig.loader.style}
            styleCircle={props.pageConfig.loader.circle.style}
        />
    </div>
};
