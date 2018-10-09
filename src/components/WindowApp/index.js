import React from 'react'

import AddressWindow from './AddressWindow'
import MenuWindow from './MenuWindow'
import LoadingWindow from './LoadingWindow'
import ProductWindow from './ProductWindow'
import BasketWindow from './BasketWindow'
import PayWindow from './PayWindow'

import cn from '../../utils/cn'

import './style.css';


export default (props) => {
    return <div
        className={cn("components-RightPanel-BodyRight-WindowApp-root", props.className, props.page)}
    >
        <LoadingWindow
            pageConfig={props.pageConfig.loadingPage}
            onLoading={props.onOpenNewPage}
        />
        <AddressWindow
            pageConfig={props.pageConfig.addressPage}
            onOpenNewPage={props.onOpenNewPage}
        />
        <MenuWindow
            pageConfig={props.pageConfig.menuPage}
            onOpenNewPage={props.onOpenNewPage}
        />
        <ProductWindow
            pageConfig={props.pageConfig.productPage}
            onOpenNewPage={props.onOpenNewPage}
        />
        <BasketWindow
            pageConfig={props.pageConfig.basketPage}
            onOpenNewPage={props.onOpenNewPage}
        />
        <PayWindow
            pageConfig={props.pageConfig.payPage}
            onOpenNewPage={props.onOpenNewPage}
        />
    </div>
};
