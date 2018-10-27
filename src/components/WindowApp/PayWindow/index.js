import React from 'react';

import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import Header from './Header';

import './style.css';


export default class PayWindow extends React.Component {
    constructor() {
        super();
    }

    onClickBack() {
        this.props.onOpenNewPage('basketPage', {});
    }

    onClickOk() {
        alert('Ваша покупка совершена');
        this.props.onOpenNewPage('menuPage', {});
    }

    render() {
        const {props} = this;

        return <div
            className="components-RightPanel-BodyRight-WindowApp-PayWindow-root"
            style={props.pageConfig.background.style} >

            <Header
                config={props.pageConfig.header}
                onClickBack={this.onClickBack.bind(this)}
            />
            <LeftPanel config={props.pageConfig.leftPanel}/>
            <RightPanel
                config={props.pageConfig.rightPanel}
                onClickOk={this.onClickOk.bind(this)}
            />

        </div>
    }
};
