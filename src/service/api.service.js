import {Observable} from 'rxjs'
import * as axios from 'axios';

const API = (method, url, data, params, response = 'json') => {
    return new Observable(subscriber => {
        axios({
            method: method,
            url: url,
            data: data,
            params: params,
            responseType: response
        }).then(response => {
            subscriber.next(response);
            subscriber.complete();
        }).catch((error, data) => {
            subscriber.error(error.toJSON());
            subscriber.complete();
        })
    });
};

export default API;
