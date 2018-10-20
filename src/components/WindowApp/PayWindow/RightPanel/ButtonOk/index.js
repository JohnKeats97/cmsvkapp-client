import React from 'react'

import './style.css';


export default (props) => {

    return <button
        className="components-RightPanel-BodyRight-WindowApp-PayWindow-RightPanel-ButtonOk-root"
        style={props.config.style}
    >
        {props.config.text}
    </button>
};
