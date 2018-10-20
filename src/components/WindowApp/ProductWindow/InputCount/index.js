import React from 'react'

import cn from '../../../../utils/cn'

import './style.css';


export default (props) => {


    return <div
        className="components-RightPanel-BodyRight-WindowApp-ProductWindow-InputCount-root"
        style={props.config.style}
    >
        <button
            className={cn(
                "components-RightPanel-BodyRight-WindowApp-ProductWindow-InputCount-minus",
                "components-RightPanel-BodyRight-WindowApp-ProductWindow-InputCount-button"
            )}/>
        <input className="components-RightPanel-BodyRight-WindowApp-ProductWindow-InputCount-count" value={'1'}/>
        <button
            className={cn(
                "components-RightPanel-BodyRight-WindowApp-ProductWindow-InputCount-plus",
                "components-RightPanel-BodyRight-WindowApp-ProductWindow-InputCount-button"
        )}/>
    </div>
};
