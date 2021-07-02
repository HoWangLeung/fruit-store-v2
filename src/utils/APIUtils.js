import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN } from '../constants/'


const request = (payload) => {
    const headers = {
        'Content-Type': 'application/json',
    }
    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
    }

    let config = {
        headers: headers,
        method: 'post',
        url: API_BASE_URL + "/api/auth/signup",
        data: payload
    }
    return axios(config)
        .then(res => {
            console.log(res);
            return res
        })
        .catch(e =>        console.log(e.response))
    // return fetch(options.url, options)
    //     .then(response =>
    //         response.json().then(json => {
    //             if (!response.ok) {
    //                 return Promise.reject(json);
    //             }
    //             return json;
    //         })
    //     );
};


export function signup(payload) {
    return request(payload);
}