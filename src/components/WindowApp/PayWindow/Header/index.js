import React from 'react'

import './style.css';
import ButtonBack from "./ButtonBack";


export default (props) => {
    return <div
        className="components-RightPanel-BodyRight-WindowApp-PayWindow-Header-root"
        style={props.config.style}
        >
        <ButtonBack config={props.config.buttonback}/>
    </div>
};
