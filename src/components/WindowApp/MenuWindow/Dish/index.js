import React from 'react'

import './style.css';


export default (props) => {
    const onClickProduct = () => {
        props.onOpenNewPage('productPage', {productInfo: menuItem});
    };

    const {menuItem} = props;
    return <div
        className="components-RightPanel-BodyRight-WindowApp-MenuWindow-item"
        onClick={onClickProduct}
    >
        <div className="components-RightPanel-BodyRight-WindowApp-MenuWindow-item-link">
            <div className="components-RightPanel-BodyRight-WindowApp-MenuWindow-item-info">
                <div className="components-RightPanel-BodyRight-WindowApp-MenuWindow-item-title">
                    {menuItem.title}
                </div>
                <div className="components-RightPanel-BodyRight-WindowApp-MenuWindow-item-decs">
                    {menuItem.description}
                </div>
                <div className="components-RightPanel-BodyRight-WindowApp-MenuWindow-item-price">
                    {menuItem.price} Р
                </div>
            </div>
            <img
                className="components-RightPanel-BodyRight-WindowApp-MenuWindow-item-photo"
                src={menuItem.image && `https://www.delivery-club.ru/${menuItem.image[200]}` || 'https://www.delivery-club.ru/media/cms/relation_product/77/301617448_f.jpg'}
            />
        </div>
        <button
            className="components-RightPanel-BodyRight-WindowApp-MenuWindow-item-button"
            style={props.pageConfig.buttonOk.style}
            onClick={props.onAddProduct}
        >
            {props.pageConfig.buttonOk.text}
        </button>
    </div>
};
