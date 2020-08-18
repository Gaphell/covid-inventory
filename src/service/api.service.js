import {Observable} from 'rxjs'
import axios from 'axios';
import AuthService from "../containers/auth/service/authService";

axios.defaults.baseURL = 'https://lockdown.whs.selise.dev/api/v1';

const API = (method, url, data, params, response = 'json') => {
    const headers = {};
    if (AuthService.isAuthenticated) {
        headers['Authorization'] = AuthService.token;
    }
    return new Observable(subscriber => {
        axios({
            method: method,
            url: url,
            headers,
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
