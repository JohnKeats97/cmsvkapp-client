import React from 'react'

import './style.css';


export default (props) => {

    return <button
        className="components-RightPanel-BodyRight-WindowApp-MenuWindow-Header-ButtonBack-root"
        style={props.config.style}
    >
        {props.config.text}
    </button>
};
