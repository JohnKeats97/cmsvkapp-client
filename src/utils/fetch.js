'use strict';

/**
 * Модуль, предоставляющий методы для выполнения HTTP-запросов
 * @module Fetch
 */
const baseURL = 'http://127.0.0.1:5000';


export default class Fetch
{
    /**
     * Выполняет GET-запрос по указанному адресу с использованием fetch
     * @param {string} url - адрес запроса
     * @return {Promise}
     */
    static Get(url)
    {
        return fetch(baseURL + url,
            {
                method: 'GET',
                mode: 'cors'
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
     * @param {string} url - адрес запроса
     * @param {*} body - тело запроса (объект)
     * @return {Promise}
     */
    static Post(url, body)
    {
        return fetch(baseURL + url,
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
