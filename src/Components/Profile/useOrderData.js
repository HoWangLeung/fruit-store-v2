
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { ACCESS_TOKEN, API_BASE_URL } from '../../constants'

export default function useProfileData() {

    const [data, setData] = useState([])

    useEffect(() => {


        const headers = {
            'Content-Type': 'application/json',
        }
        if (localStorage.getItem(ACCESS_TOKEN)) {
            headers['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }

        let config = {
            headers: headers,
            method: 'get',
            url: API_BASE_URL + "/api/orders/order"
        }
        axios(config)
            .then(res => {
                console.log(res.data);
                setData(res.data)
            })
            .catch(e => {
                console.log(e.response)
            })

 
    }, [])

    return data
}
