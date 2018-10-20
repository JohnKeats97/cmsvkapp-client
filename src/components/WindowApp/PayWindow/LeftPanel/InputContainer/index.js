import React from 'react'



import './style.css';


export default (props) => {

    return <div
        className="components-RightPanel-BodyRight-WindowApp-PayWindow-LeftPanel-InputContainer-root"
        style={props.config.style}
    >
        <div
            className="components-RightPanel-BodyRight-WindowApp-PayWindow-LeftPanel-InputContainer-title"
            style={props.config.title.style}
        >
            {props.config.title.text}
        </div>
        <input
            className="components-RightPanel-BodyRight-WindowApp-PayWindow-LeftPanel-InputContainer-input"
            style={props.config.input.style}
            placeholder={props.config.input.placeholder}
        />
    </div>
};
