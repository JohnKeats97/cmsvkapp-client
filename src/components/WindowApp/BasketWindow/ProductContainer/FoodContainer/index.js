import React from 'react'

import './style.css';


export default (props) => {
    let listFood = [];

    const {products} = props.basket;
    const productsId = Object.keys(products);

    for (let i = 0; i < productsId.length; i++) {
        listFood.push(<div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-list">
            <div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-item">
                <div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-imgContainer">
                    <img
                        className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-image"
                        src={`https://www.delivery-club.ru/${products[productsId[i]].image[200]}`}
                    />
                </div>
                <div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-info">
                    <div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-consist">
                        <div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-title">
                            {products[productsId[i]].title}
                        </div>
                        <div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-cost">
                            {products[productsId[i]].count * products[productsId[i]].price} Р
                        </div>
                    </div>
                    <div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-controls">
                        <div className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ProductContainer-FoodContainer-quantity">
                            {products[productsId[i]].count}
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
