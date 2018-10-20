import React from 'react'

import AddressWindow from './AddressWindow/index'
import MenuWindow from './MenuWindow/index'
import LoadingWindow from './LoadingWindow/index'
import ProductWindow from './ProductWindow/index'
import BasketWindow from './BasketWindow/index'
import PayWindow from './PayWindow/index'

import cn from '../../utils/cn'

import './style.css';


export default (props) => {
    return <div
        className={cn("components-RightPanel-BodyRight-WindowApp-root", props.className, props.page)}
    >
        <LoadingWindow pageConfig={props.pageConfig.loadingPage}/>
        <AddressWindow pageConfig={props.pageConfig.addressPage}/>
        <MenuWindow pageConfig={props.pageConfig.menuPage}/>
        <ProductWindow pageConfig={props.pageConfig.productPage}/>
        <BasketWindow pageConfig={props.pageConfig.basketPage}/>
        <PayWindow pageConfig={props.pageConfig.payPage}/>
    </div>
};
