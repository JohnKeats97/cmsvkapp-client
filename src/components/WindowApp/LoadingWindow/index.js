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
        // Fetch.Get('http://ec2-18-222-193-16.us-east-2.compute.amazonaws.com/service/10000/menu/?data=menu', {
        //     'x-client-authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ4YjQwMWIyNjcyOTUxYWZmMDVhYThmYjM0OTE3Yjg2ZWUzZGZmYTEyMGU2ZmVjMTA3OTY5NzNmZWNmYzFlNTVlMmE2MmZiNmQ2MWJjOTAwIn0.eyJhdWQiOiJlZHVjYXRpb25fYnVldmljaF9ndXNldl9wYXJmZW5rb3YiLCJqdGkiOiJkOGI0MDFiMjY3Mjk1MWFmZjA1YWE4ZmIzNDkxN2I4NmVlM2RmZmExMjBlNmZlYzEwNzk2OTczZmVjZmMxZTU1ZTJhNjJmYjZkNjFiYzkwMCIsImlhdCI6MTU0MDM3MTU5NSwibmJmIjoxNTQwMzcxNTk1LCJleHAiOjE1NDA1NDQzOTUsInN1YiI6IiIsInNjb3BlcyI6WyJmdWxsX2FjY2VzcyJdfQ.cmCCs3z5QKw1hBhBE48Rw1IBbqaHALLr8To60C0NzkYSVAmmT-FtC8I-6KE01tV_nWlxciGVUC10uIYM5TzfZslAjRQxJeY5ztU96tvJUCqWuOZHA4sf_BJ5BsatKNVaknO1kJ92gmLPb_BglP_LowC-rNFmNck2S4SDCqQExWQ'
        // });
        setTimeout(() => {
            this.props.onLoading('addressPage', {});
        }, 3000);
    }

    render() {
        const {props} = this;
        setTimeout(() => {
            this.loadingData();
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
