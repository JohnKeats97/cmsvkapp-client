export default {
    loadingPage: {
        namePage: 'Страница загрузки',
        background: {
            style: {
                background: '#ffbdd2'
            }
        },
        title: {
            text: 'Загрузка...',
            style: {
                color: '#000000',
                fontSize: '30px',
                left: '310px',
                top: '250px',
            }
        },
        loader: {
            style: {
                left: '330px',
                top: '315px'
            },
            circle: {
                style: {
                    background: '#000fff',
                    width: '26px',
                    height: '26px'
                }
            }
        }
    },
    addressPage: {
        namePage: 'Страница ввода адреса',
        title: {
            text: 'Введите адрес доставки',
            style: {
                color: '#000000',
                fontSize: '25px',
                left: '270px',
                top: '250px',
            }
        },
        background: {
            style: {
                background: '#ffbdd3'
            }
        },
        buttonOK: {
            text: 'Принять',
            style: {
                background: '#ffbd00',
                color: '#ff0d00',
                height: '50px',
                width: '100px',
                borderRadius: '10px',
                left: '570px',
                top: '300px',
                fontSize: '15px',
                borderWidth: '1px'
            }
        },
        inputAddress: {
            placeholder: 'Адрес доставки...',
            style: {
                background: '#ffffff',
                color: '#000000',
                height: '50px',
                width: '390px',
                borderRadius: '10px',
                left: '170px',
                top: '300px',
                outline: 'none',
                fontSize: '15px',
                borderWidth: '1px'
            }
        }
    },
    menuPage: {
        namePage: 'Меню',
        background: {
            style: {
                background: '#ffbdd3'
            }
        },
    },
    productPage: {
        namePage: 'Страница блюда',
        background: {
            style: {
                background: 'rgba(46,46,51,.2)'
            }
        },
        buttonClose: {
            style: {
                top: '20px',
                left: '585px'
            }
        },
        inputCount: {
            style: {
                top: '515px',
                left: '335px'
            }
        },
        productContainer: {
            style: {
                background: '#fff00190',
                height: '600px',
                width: '350px',
                top: '20px',
                left: '230px'
            }
        },
        imageContainer: {
            style: {
                background: '#f6f6f6',
                height: '220px',
                width: '350px',
                top: '20px',
                left: '230px'
            },
            image: {
                src: 'https://www.delivery-club.ru//media/cms/relation_product/15275/301976305_f.jpg'
            }
        },
        title: {
            text: 'Кинг Наггетс (станд.)',
            style: {
                color: '#000000',
                fontSize: '25px',
                left: '270px',
                top: '250px',
                width: '270px'
            }
        },
        description: {
            text: 'Наши наггетсы сделаны из нежного белого куриного мяса в легкой хрустящей панировке. Рекомендуем к ним восемь разных, но одинаково вкусных соусов на выбор: сырный, кетчуп, барбекю, кисло-сладкий, карри, чесночный, горчичный, сацебели.',
            style: {
                color: '#000000',
                fontSize: '17px',
                left: '260px',
                top: '290px',
                width: '270px'
            }
        },
        buttonOK: {
            text: 'Принять',
            style: {
                background: '#97c62b',
                color: '#000533',
                height: '40px',
                width: '300px',
                borderRadius: '5px',
                left: '255px',
                top: '570px',
                fontSize: '15px',
                borderWidth: '0px'
            }
        },
    },
    basketPage: {
        namePage: 'Корзина покупок',
        background: {
            style: {
                background: 'rgba(46,46,51,.2)'
            }
        },
        productContainer: {
            style: {
                background: '#fff00190',
                left: '220px'
            }
        },
        foodContainer: {
            style: {
                background: '#f6f6f6'
            }
        },
        textContainer: {
            order: {
                style: {
                    color: '#000fff',
                    fontSize: '18px'
                }
            },
            delivery: {
                style: {
                    color: '#000fff',
                    fontSize: '18px'
                }
            },
            result: {
                style: {
                    color: '#000fff',
                    fontSize: '21px'
                }
            }
        },
        buttonOK: {
            text: 'Принять',
            style: {
                background: '#97c62b',
                color: '#000533',
                height: '40px',
                width: '300px',
                borderRadius: '5px',
                left: '270px',
                top: '590px',
                fontSize: '15px',
                borderWidth: '0px'
            }
        }
    },
    payPage: {
        namePage: 'Страница оплаты',
        background: {
            style: {
                background: '#ffbdd3'
            }
        },
    },
}
