import React from 'react';

import LeftPanel from './LeftPanel';
import RightPanet from './RightPanel';

import './style.css';


export default (props) => {

    return <div
        className="components-RightPanel-BodyRight-WindowApp-PayWindow-root"
        style={props.pageConfig.background.style} >

        <LeftPanel config={props.pageConfig.leftPanel}/>
        <RightPanet config={props.pageConfig.rightPanel}/>

    </div>
};
