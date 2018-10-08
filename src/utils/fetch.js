'use strict';

/**
 * Модуль, предоставляющий методы для выполнения HTTP-запросов
 * @module Fetch
 */

const BaseUrl = "https://cmsvkapp.herokuapp.com/api";

export default class Fetch
{
    /**
     * Выполняет GET-запрос по указанному адресу с использованием fetch
     * @param {string} address - адрес запроса
     * @return {Promise}
     */
    static Get(address)
    {
        const url = BaseUrl + address;
        return fetch(url,
            {
                method: 'GET',
                mode: 'cors',
            })
            .then(function (response)
            {
                if (response.status >= 400)
                    throw response;

                return response.json();
            });
    }

    /**
     * Выполняет POST-запрос по указанному адресу с использованием fetch
     * @param {string} address - адрес запроса
     * @param {*} body - тело запроса (объект)
     * @return {Promise}
     */
    static Post(address, body)
    {
        const url = BaseUrl + address;
        return fetch(url,
            {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(body),
                headers:
                    {
                        'Content-Type': 'application/json; charset=utf-8'
                    }
            }).then(function (response)
        {
            if (response.status >= 400)
                throw response;

            return response.json();
        });
    }
}
