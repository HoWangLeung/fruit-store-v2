import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { API_BASE_URL } from '../../../constants'
 

export default function useData() {
    const [data, setData] = useState([])

    useEffect(() => {

        axios.get(`${API_BASE_URL}/api/products/`)
            .then(res => {
                let data = res.data
                data.map(d=>{
                    d.quantity=0
                    return d
                })
            
                 setData(data)
            })

      


    }, [])


    return data
}
