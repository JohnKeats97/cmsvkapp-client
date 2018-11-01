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
            page: 'loadingPage'
        };

        // для меню блюд
        this.menu = {};

        // описание выбранного блюда
        this.productInfo = {};

    }

    onOpenNewPage (page, {menu = null, productInfo = null}) {
        if (menu) {
            this.menu = menu;
        }
        if (productInfo) {
            this.productInfo = productInfo;
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
            />
        </div>
    }
};
