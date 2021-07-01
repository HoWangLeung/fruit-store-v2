import { Grid } from '@material-ui/core'
import React from 'react'
import ItemCard from './ItemCard/ItemCard'
import ItemFilter from './ItemFilter/ItemFilter'
import { data } from './Data/FruitItem'
import { useState } from 'react'
import './Store.scss'
const categorySet = new Set(data.map((d) => d.category));
const countrySet = new Set(data.map((d) => d.country));
const categories = Array.from(categorySet).sort();
const countries = Array.from(countrySet).sort();

function Store() {
    const [selectedCategory, setSelectedCategory] = useState()
    const [selectedCountry, setSelectedCountry] = useState()
    
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
            <ItemCard data={data}
                selectedCountry={selectedCountry}
                selectedCategory={selectedCategory}

            />
        </div>

    )
}

export default Store
