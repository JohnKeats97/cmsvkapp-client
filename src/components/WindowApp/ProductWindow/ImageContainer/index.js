import React from 'react'

import './style.css';


export default (props) => {

    return <div
        className="components-RightPanel-BodyRight-WindowApp-ProductWindow-ImageContainer-root"
        style={props.config.style}
    >
        <img
            className="components-RightPanel-BodyRight-WindowApp-ProductWindow-ImageContainer-image"
            src={props.config.image.src}
        />
    </div>
};
