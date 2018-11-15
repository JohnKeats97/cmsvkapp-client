import React from 'react'

import Loader from './Loader/index'
import Fetch from '../../../utils/fetch'
import pageConfig from '../../../config/pages'

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

        Fetch.Get(`/geo_decode/?q=${this.props.userAddress}`)
            .then(({response})=>{
                if(!response.success) {
                    this.props.onLoading('addressPage', {});
                    alert(response.error.message);
                    return;
                }
                const address = response;
                Fetch.Get(`/services/info/?service_id=${pageConfig.serviceId}&lat=${response.pos.lat}&long=${response.pos.long}`)
                    .then((response)=>{
                        if(response.errortext) {
                            this.props.onLoading('addressPage', {});
                            alert('Ресторан не поддерживает доставку по вашему адресу');
                            return;
                        }
                        const idBranch = response.response.service.id;

                        let myMenu = {};
                        Fetch.Get(`/service/${idBranch}/menu/?data=menu`)
                            .then(({response}) => {
                                const {menu} = response;
                                for (let i = 0; i < menu.length; i++) {
                                    let cat = {};
                                    for (let j = 0; j < menu[i].product_ids.length; j++) {
                                        cat[menu[i].product_ids[j]] = {};
                                    }
                                    myMenu[menu[i].title] = cat;
                                }
                                Fetch.Get(`/service/${idBranch}/menu/?data=products`)
                                    .then(({response})=>{
                                        const myProduct = {};
                                        const {products} = response;
                                        for (let i = 0; i < products.length; i++) {
                                            myProduct[products[i].id] = products[i];
                                        }

                                        const OKmyMenu = Object.keys(myMenu);
                                        for (let i = 0; i < OKmyMenu.length; i++) {
                                            const cat = Object.keys(myMenu[OKmyMenu[i]]);
                                            for (let j = 0; j < cat.length; j++) {
                                                myMenu[OKmyMenu[i]][cat[j]] = myProduct[cat[j]];
                                            }
                                        }
                                        this.props.onLoading('menuPage', {menu: myMenu, id: idBranch, address: address});
                                    })
                            })
                    });
            });
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
