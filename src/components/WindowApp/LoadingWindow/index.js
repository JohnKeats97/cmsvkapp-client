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
        Fetch.Get('http://ec2-13-58-118-146.us-east-2.compute.amazonaws.com/service/10000/menu/?data=menu')
            .then(({response}) => {
                const {menu} = response;
                for (let i = 0; i < menu.length; i++) {
                    let cat = {};
                    for (let j = 0; j < menu[i].product_ids.length; j++) {
                        cat[menu[i].product_ids[j]] = {};
                    }
                    myMenu[menu[i].title] = cat;
                }
                Fetch.Get('http://ec2-13-58-118-146.us-east-2.compute.amazonaws.com/service/10000/menu/?data=products')
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
