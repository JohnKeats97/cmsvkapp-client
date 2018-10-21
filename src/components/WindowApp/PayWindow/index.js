import React from 'react';

import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import Header from './Header';

import './style.css';


export default (props) => {

    return <div
        className="components-RightPanel-BodyRight-WindowApp-PayWindow-root"
        style={props.pageConfig.background.style} >

        <Header config={props.pageConfig.header} />
        <LeftPanel config={props.pageConfig.leftPanel}/>
        <RightPanel config={props.pageConfig.rightPanel}/>

    </div>
};
