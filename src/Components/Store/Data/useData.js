import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { API_BASE_URL } from '../../../constants'


export default function useData(locale) {
    console.log("locale",locale)
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    
    useEffect(() => {

        axios.get(`${API_BASE_URL}/api/products/`)
            .then(res => {
                let data = res.data
                
                  data.map(d => {
                
                    
                
                    d.name = d.localizations[`${locale}`].name
                    d.category = d.localizations[`${locale}`].category
                    d.country = d.localizations[`${locale}`].country
                    d.unit = d.localizations[`${locale}`].unit
                    d.quantity = 0

                    
                    return d
                })

                setData(data)
                setIsLoading(false)
            })




    }, [])


    return [data, isLoading]
}
