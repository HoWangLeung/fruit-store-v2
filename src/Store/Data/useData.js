import React, { useEffect } from 'react'
import { useState } from 'react'
import { data as rawData } from './FruitItem'
export default function useData() {
    const [data, setData] = useState(rawData)

    useEffect(() => {

        setData(rawData)


    }, [])


    return data
}
