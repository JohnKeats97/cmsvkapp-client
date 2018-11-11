import React from 'react'

import cn from '../../../../utils/cn'

import './style.css';


export default (props) => {


    return <div
        className="components-RightPanel-BodyRight-WindowApp-ProductWindow-InputCount-root"
        style={props.config.style}
    >
        <button
            onClick={() => {props.onChangeCount(-1)}}
            className={cn(
                "components-RightPanel-BodyRight-WindowApp-ProductWindow-InputCount-minus",
                "components-RightPanel-BodyRight-WindowApp-ProductWindow-InputCount-button"
            )}/>
        <input className="components-RightPanel-BodyRight-WindowApp-ProductWindow-InputCount-count" value={props.count}/>
        <button
            onClick={() => {props.onChangeCount(1)}}
            className={cn(
                "components-RightPanel-BodyRight-WindowApp-ProductWindow-InputCount-plus",
                "components-RightPanel-BodyRight-WindowApp-ProductWindow-InputCount-button"
        )}/>
    </div>
};
