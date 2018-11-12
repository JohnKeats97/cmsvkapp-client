export default class Basket {

    static create() {
        let basket = localStorage['basket'];
        if (!basket) {
            basket = JSON.stringify({price: 0, products:{}});
            localStorage['basket'] = basket;
        }
        return basket;
    }

    static get() {
        let basket = localStorage['basket'];
        if (!basket) {
            basket = Basket.create()
        }
        basket = JSON.parse(basket);
        return basket;
    }

    static addProduct(product, count = 1) {
        let basket = localStorage['basket'];
        if (!basket) {
            basket = Basket.create()
        }
        basket = JSON.parse(basket);
        if (!basket.products[product.id]) {
            basket.products[product.id] = {
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
                count
            };
        }
        else {
            basket.products[product.id].count += count;
        }
        localStorage['basket'] = JSON.stringify(basket);
        Basket.changePrice(+product.price * count);
        return basket;
    }

    static deleteProduct(id) {
        let basket = localStorage['basket'];
        if (!basket) {
            basket = Basket.create()
        }
        basket = JSON.parse(basket);
        if (!basket.products[id]) {
            return;
        }
        const price = basket.products[id].count * basket.products[id].price;
        delete basket.products[id];
        localStorage['basket'] = JSON.stringify(basket);
        Basket.changePrice(-price);
        return basket;
    }

    static changePrice(price) {
        let basket = localStorage['basket'];
        if (!basket) {
            basket = Basket.create()
        }
        basket = JSON.parse(basket);
        basket.price = +basket.price + price;
        localStorage['basket'] = JSON.stringify(basket);
        return basket;
    }


};
