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
    }


    render () {
        const {state} = this;
        return <div className='root'>
            <WindowApp
                pageConfig={state.pageConfig}
                page={state.page}
            />
        </div>
    }
};
