import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import ItemCard from './ItemCard/ItemCard'
import ItemFilter from './ItemFilter/ItemFilter'
import { useState } from 'react'
import './Store.scss'
import useData from './Data/useData'


function Store() {
    let data = useData()
    console.log(data);
    const [selectedCategory, setSelectedCategory] = useState()
    const [selectedCountry, setSelectedCountry] = useState()

    data= data.filter(d => {

        if (selectedCategory && selectedCountry) {
            return d.category === selectedCategory && d.country === selectedCountry
        }

        if (selectedCategory) {
            return d.category === selectedCategory
        }
        if (selectedCountry) {
            d = d.country === selectedCountry
        
            return d
        }

        return d
    })
    let categorySet = new Set(data.map((d) => d.category));
    let countrySet = new Set(data.map((d) => d.country));
    let categories = Array.from(categorySet).sort();
    let countries = Array.from(countrySet).sort();

    return (
        <div className="store_container" >
            <ItemFilter
               
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                categories={categories}
                countries={countries}
            />
            <ItemCard
              
                data={data}
                selectedCountry={selectedCountry}
                selectedCategory={selectedCategory}
            
              
            />
        </div>

    )
}

export default Store
