import React from 'react'

import './style.css';


export default (props) => {

    let list = [];

    for (let i = 0; i < 10; i++) {
        list.push(<div className="components-RightPanel-BodyRight-WindowApp-MenuWindow-item">
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
            >
                {props.pageConfig.buttonOk.text}
            </button>
        </div>);
    }

    return <div
        className="components-RightPanel-BodyRight-WindowApp-MenuWindow-root"
        style={props.pageConfig.background.style}
    >

        <div
            className="components-RightPanel-BodyRight-WindowApp-MenuWindow-title"
            style={props.pageConfig.title.style}
        >Популярные</div>

        {list}

    </div>
};


