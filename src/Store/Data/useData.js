import React, { useEffect } from 'react'
import { useState } from 'react'
import { data as rawData } from './FruitItem'
export default function useData(max = 6) {
    const [data, setData] = useState(rawData)

    useEffect(() => {

        setData(rawData)


    }, [])


    return data
}
