import React from 'react'

import AddresWindow from './AddressWindow'
import MenuWindow from './MenuWindow'
import ProductWindow from './ProductWindow'
import BasketWindow from './BasketWindow'
import PayWindow from './PayWindow'

import cn from '../../utils/cn'

import './style.css';


export default (props) => {
    return <div
        className={cn("components-RightPanel-BodyRight-WindowApp-root", props.className, props.page)}
    >
        <AddresWindow pageConfig={props.pageConfig.addressPage}/>
        <MenuWindow pageConfig={props.pageConfig.menuPage}/>
        <ProductWindow pageConfig={props.pageConfig.productPage}/>
        <BasketWindow pageConfig={props.pageConfig.basketPage}/>
        <PayWindow pageConfig={props.pageConfig.payPage}/>
    </div>
};
