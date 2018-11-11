import React from 'react';

import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import Header from './Header';
import Basket from '../../../utils/basket';

import './style.css';


export default class PayWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            basket: Basket.get()
        }
    }

    onClickBack() {
        this.props.onOpenNewPage('basketPage', {});
    }

    onClickOk() {
        alert('Ваша покупка совершена');
        this.props.onOpenNewPage('menuPage', {});
    }

    render() {
        const {props, state} = this;

        return <div
            className="components-RightPanel-BodyRight-WindowApp-PayWindow-root"
            style={props.pageConfig.background.style} >

            <Header
                config={props.pageConfig.header}
                onClickBack={this.onClickBack.bind(this)}
            />
            <LeftPanel
                config={props.pageConfig.leftPanel}
                userAddress={props.userAddress}
            />
            <RightPanel
                basket={state.basket}
                config={props.pageConfig.rightPanel}
                onClickOk={this.onClickOk.bind(this)}
            />

        </div>
    }
};
