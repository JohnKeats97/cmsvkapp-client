import React from 'react'

import WindowApp from './WindowApp'
import pageConfig from '../config/pages'
import Fetch from '../utils/fetch'

import './style.css';


export default class Background extends React.Component {

    constructor() {
        super();
        this.state = {
            pageConfig: pageConfig,
            page: 'addressPage'
        };

        // введенный адрес
        this.userAddress = '';

        this.address = {};

        // для меню блюд
        this.menu = {};

        // описание выбранного блюда
        this.productInfo = {};

        this.idBranch = null;
    }

    onOpenNewPage (page, {menu = null, productInfo = null, userAddress = null, id = null, address = null}) {
        if (menu) {
            this.menu = menu;
        }
        if (productInfo) {
            this.productInfo = productInfo;
        }
        if (userAddress) {
            this.userAddress = userAddress;
        }
        if (address) {
            this.address = address;
        }
        if(id) {
            this.idBranch = id;
        }

        this.setState((state)=>(state.page = page, state));
    }

    render () {
        const {state} = this;
        return <div className='root'>
            <WindowApp
                address={this.address}
                pageConfig={state.pageConfig}
                page={state.page}
                onOpenNewPage={this.onOpenNewPage.bind(this)}
                menu={this.menu}
                productInfo={this.productInfo}
                userAddress={this.userAddress}
                idBranch={this.idBranch}
            />
        </div>
    }
};
