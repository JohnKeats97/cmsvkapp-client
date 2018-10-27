import React from 'react'

import './style.css';


export default (props) => {
    return <div
        className="components-RightPanel-BodyRight-WindowApp-MenuWindow-item"
        onClick={props.onClickProduct}
    >
        <div className="components-RightPanel-BodyRight-WindowApp-MenuWindow-item-link">
            <div className="components-RightPanel-BodyRight-WindowApp-MenuWindow-item-info">
                <div className="components-RightPanel-BodyRight-WindowApp-MenuWindow-item-title">
                    Салат цезарь с курицей
                </div>
                <div className="components-RightPanel-BodyRight-WindowApp-MenuWindow-item-decs">
                    Салат айсберг, куриные грудки, сыр пармезан, помидоры черри, соус цезарь.
                </div>
                <div className="components-RightPanel-BodyRight-WindowApp-MenuWindow-item-price">
                    260 Р
                </div>
            </div>
            <img
                className="components-RightPanel-BodyRight-WindowApp-MenuWindow-item-photo"
                src="https://www.delivery-club.ru//media/cms/relation_product/77/301617448_f.jpg"
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
