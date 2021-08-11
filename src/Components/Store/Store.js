import { Container, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Store.scss'
import useData from './Data/useData'
import ItemCard from './ItemCard/ItemCard'
import ItemFilter from './ItemFilter/ItemFilter'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom'
import {testData} from './Data/FruitItem'
import { FormattedMessage } from 'react-intl'
function Store({isAuthenticated}) {
    let history = useHistory();
    const locale = history.location.pathname.substring(1, 3)
    let [data, isLoading] = useData(locale)
    
    const { enqueueSnackbar } = useSnackbar();
  
    let cart = []

    if (localStorage.getItem("cart")) {

        cart = JSON.parse(localStorage.getItem("cart"))
    }
console.log(JSON.stringify(testData));
    const [selectedCategory, setSelectedCategory] = useState()
    const [selectedCountry, setSelectedCountry] = useState()
    const [quantity, setQuantity] = useState({})



    let categorySet = new Set(data.map((d) => d.category));
    let countrySet = new Set(data.map((d) => d.country));
    let categories = Array.from(categorySet).sort();
    let countries = Array.from(countrySet).sort();
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

    console.log(data);
    const handleSetQuantity = (target) => {

        setQuantity(state => ({
            ...state,
            [target.name]: target.value,
        }))
    }
    const handleSetCart = (itemName) => {
        console.log('setting item ', itemName);
        let selected = data
            .filter(d => d.name == itemName)
            .map(d => {

                d.quantity = Object.keys(quantity).indexOf(d.name) >= 0 ? quantity[`${d.name}`] : 1

                return d
            })[0]
        cart.map(d => {
            if (d.name === selected.name) {
                d.quantity += selected.quantity
            }
            return d
        })
        let isExist = cart.some(obj => obj.name === selected.name);

        if (!isExist)
            cart.push(selected)
        localStorage.setItem('cart', JSON.stringify(cart))
        enqueueSnackbar(
            <FormattedMessage id="store.successAdd" />
            ,
         { variant: 'success', autoHideDuration: 2000, });
    }


console.log(countrySet);
    return (

        <Container     className="store_container" maxWidth={false}>
           
                    <ItemFilter
                        data={data}
                        isLoading={isLoading}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedCountry={selectedCountry}
                        setSelectedCountry={setSelectedCountry}
                        categories={categories}
                        countries={countries}
                    />
             
                    <ItemCard
                        isLoading={isLoading}
                        cart={cart}
                        data={data}
                        selectedCountry={selectedCountry}
                        selectedCategory={selectedCategory}
                        quantity={quantity}
                        setQuantity={handleSetQuantity}
                        setCart={handleSetCart}

                    />
        


        </Container>

    )
}

export default Store
