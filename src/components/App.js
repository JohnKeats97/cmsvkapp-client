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
        this.menu = {};

        Fetch.Get('/test/config')
            .then(response => {
                if (response) {
                    this.setState((state)=>{
                        state.pageConfig = response;
                        return state;
                    });
                }
            });
    }

    onOpenNewPage (page, menu) {
        if (!menu) {
            this.menu = menu;
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
            />
        </div>
    }
};
