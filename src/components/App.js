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

        // для меню блюд
        this.menu = {};

        // описание выбранного блюда
        this.productInfo = {};

        this.idBranch = null;
    }

    onOpenNewPage (page, {menu = null, productInfo = null, address = null, id = null}) {
        if (menu) {
            this.menu = menu;
        }
        if (productInfo) {
            this.productInfo = productInfo;
        }
        if (address) {
            this.userAddress = address;
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
                pageConfig={state.pageConfig}
                page={state.page}
                onOpenNewPage={this.onOpenNewPage.bind(this)}
                menu={this.menu}
                productInfo={this.productInfo}
                userAddress={this.userAddress}
            />
        </div>
    }
};
