import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'


import { useState } from 'react'
import './Store.scss'
import useData from './Data/useData'
import ItemCard from './ItemCard/ItemCard'
import ItemFilter from './ItemFilter/ItemFilter'

function Store() {
    let data = useData()

    const [selectedCategory, setSelectedCategory] = useState()
    const [selectedCountry, setSelectedCountry] = useState()
    const [quantity, setQuantity] = useState({})
    const [cart, setCart] = useState({})


    data = data.filter(d => {

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
    const handleSetQuantity = (target) => {

        setQuantity(state => ({
            ...state,
            [target.name]: target.value,
        }))
    }
    const handleSetCart = (i) => {

        let selected = data
            .filter(d => parseInt(d.id - 1) == parseInt(i))
            .map(d => {
                d.quantity = Object.keys(quantity).indexOf(d.name) >= 0 ? quantity[`${d.name}`] : 1
                return d
            })[0]



        let cart = JSON.parse(localStorage.getItem("cart")) || [];




        console.log('NOT empty');
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].name === selected.name) {
                console.log('found duplicate');
                cart[i].quantity += selected.quantity
            }
        }
        let isExist = cart.some(obj => obj.name === selected.name);



        if (!isExist)
            cart.push(selected)



        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(cart);

    }



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
                cart={cart}

                data={data}
                selectedCountry={selectedCountry}
                selectedCategory={selectedCategory}
                quantity={quantity}
                setQuantity={handleSetQuantity}
                setCart={handleSetCart}

            />
        </div>

    )
}

export default Store
