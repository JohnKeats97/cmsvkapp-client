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
            menu={props.menu}
        />
        <ProductWindow
            pageConfig={props.pageConfig.productPage}
            onOpenNewPage={props.onOpenNewPage}
            productInfo={props.productInfo}
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
