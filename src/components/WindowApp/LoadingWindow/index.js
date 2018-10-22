import React from 'react'

import Loader from './Loader/index'
import Fetch from '../../../utils/fetch'

import './style.css';


export default class LoadingWindow extends React.Component {
    constructor() {
        super();
    }

    loadingData() {
        const {length} = document.querySelectorAll('.loadingPage .components-RightPanel-BodyRight-WindowApp-LoadingWindow-root');
        if (!length) {
            return;
        }
        setTimeout(() => {
            this.props.onLoading('addressPage', {});
        }, 3000);
    }

    render() {
        const {props} = this;
        setTimeout(() => {
            this.loadingData(); // сделать чтобы не при рендере а при запуске экрана
        }, 0);

        return <div
            className="components-RightPanel-BodyRight-WindowApp-LoadingWindow-root"
            style={props.pageConfig.background.style}>
            <div
                className="components-RightPanel-BodyRight-WindowApp-LoadingWindow-title"
                style={props.pageConfig.title.style}
            >
                {props.pageConfig.title.text}
            </div>
            <Loader
                className="components-RightPanel-BodyRight-WindowApp-LoadingWindow-loader"
                style={props.pageConfig.loader.style}
                styleCircle={props.pageConfig.loader.circle.style}
            />
        </div>
    }
}
