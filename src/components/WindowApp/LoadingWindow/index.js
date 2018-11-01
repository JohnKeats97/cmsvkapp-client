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
        let myMenu = {};
        Fetch.Get('http://localhost:5000/service/10000/menu/?data=menu', {
            'x-client-authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ4YjQwMWIyNjcyOTUxYWZmMDVhYThmYjM0OTE3Yjg2ZWUzZGZmYTEyMGU2ZmVjMTA3OTY5NzNmZWNmYzFlNTVlMmE2MmZiNmQ2MWJjOTAwIn0.eyJhdWQiOiJlZHVjYXRpb25fYnVldmljaF9ndXNldl9wYXJmZW5rb3YiLCJqdGkiOiJkOGI0MDFiMjY3Mjk1MWFmZjA1YWE4ZmIzNDkxN2I4NmVlM2RmZmExMjBlNmZlYzEwNzk2OTczZmVjZmMxZTU1ZTJhNjJmYjZkNjFiYzkwMCIsImlhdCI6MTU0MDM3MTU5NSwibmJmIjoxNTQwMzcxNTk1LCJleHAiOjE1NDA1NDQzOTUsInN1YiI6IiIsInNjb3BlcyI6WyJmdWxsX2FjY2VzcyJdfQ.cmCCs3z5QKw1hBhBE48Rw1IBbqaHALLr8To60C0NzkYSVAmmT-FtC8I-6KE01tV_nWlxciGVUC10uIYM5TzfZslAjRQxJeY5ztU96tvJUCqWuOZHA4sf_BJ5BsatKNVaknO1kJ92gmLPb_BglP_LowC-rNFmNck2S4SDCqQExWQ'
        })
            .then(({response}) => {
                const {menu} = response;
                for (let i = 0; i < menu.length; i++) {
                    let cat = {};
                    for (let j = 0; j < menu[i].product_ids.length; j++) {
                        cat[menu[i].product_ids[j]] = {};
                    }
                    myMenu[menu[i].title] = cat;
                }
                Fetch.Get('http://localhost:5000/service/10000/menu/?data=products', {
                        'x-client-authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ4YjQwMWIyNjcyOTUxYWZmMDVhYThmYjM0OTE3Yjg2ZWUzZGZmYTEyMGU2ZmVjMTA3OTY5NzNmZWNmYzFlNTVlMmE2MmZiNmQ2MWJjOTAwIn0.eyJhdWQiOiJlZHVjYXRpb25fYnVldmljaF9ndXNldl9wYXJmZW5rb3YiLCJqdGkiOiJkOGI0MDFiMjY3Mjk1MWFmZjA1YWE4ZmIzNDkxN2I4NmVlM2RmZmExMjBlNmZlYzEwNzk2OTczZmVjZmMxZTU1ZTJhNjJmYjZkNjFiYzkwMCIsImlhdCI6MTU0MDM3MTU5NSwibmJmIjoxNTQwMzcxNTk1LCJleHAiOjE1NDA1NDQzOTUsInN1YiI6IiIsInNjb3BlcyI6WyJmdWxsX2FjY2VzcyJdfQ.cmCCs3z5QKw1hBhBE48Rw1IBbqaHALLr8To60C0NzkYSVAmmT-FtC8I-6KE01tV_nWlxciGVUC10uIYM5TzfZslAjRQxJeY5ztU96tvJUCqWuOZHA4sf_BJ5BsatKNVaknO1kJ92gmLPb_BglP_LowC-rNFmNck2S4SDCqQExWQ'
                    })
                        .then(({response})=>{
                            const myProduct = {};
                            const {products} = response;
                            for (let i = 0; i < products.length; i++) {
                                myProduct[products[i].id] = products[i];
                            }

                            const OKmyMenu = Object.keys(myMenu)
                            for (let i = 0; i < OKmyMenu.length; i++) {
                                const cat = Object.keys(myMenu[OKmyMenu[i]]);
                                for (let j = 0; j < cat.length; j++) {
                                    myMenu[OKmyMenu[i]][cat[j]] = myProduct[cat[j]];
                                }
                            }
                            this.props.onLoading('addressPage', {menu: myMenu});
                        })
            })
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
