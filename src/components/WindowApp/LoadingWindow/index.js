import React from 'react'

import './style.css';


export default class LoadingWindow extends React.Component {
    constructor() {
        super();
    }

    loadingData() {
        setTimeout(() => {
            this.props.onLoading('addressPage', {});
        }, 3000);
    }

    render () {
        const {props} = this;
        this.loadingData();

        return <div
            className="components-RightPanel-BodyRight-WindowApp-LoadingWindow-root"
            style={props.pageConfig.background.style}>
        </div>
    }
};
