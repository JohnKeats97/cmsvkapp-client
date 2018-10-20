import React from 'react'

import './style.css';


export default (props) => {
    let listFood = [];

    const urlImg = 'https://diabet-expert.com/wp-content/uploads/2017/12/regulyarnoe-upotreblenie-fruktov-v-pischu-ukreplya-480x320.jpg';

    for (let i = 0; i < 5; i++) {
        listFood.push(<div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-list">
            <div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-item">
                <div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-imgContainer">
                    <img
                        className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-image"
                        src={urlImg}
                    />
                </div>
                <div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-info">
                    <div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-consist">
                        <div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-title">
                            Клаб-сэндвич 300 г
                        </div>
                        <div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-cost">
                            2010 Р
                        </div>
                    </div>
                    <div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-controls">
                        <div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-quantity">
                            5
                        </div>
                        <button className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-minus components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-button" />
                        <button className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-plus components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-button" />
                        <button className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-delete components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-button" />
                    </div>
                </div>
            </div>
        </div>);
    }

    return <div
        className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-root"
        style={props.config.style}
    >
        {listFood}
    </div>
};
