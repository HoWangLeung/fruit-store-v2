import { Container, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Store.scss'
import useData from './Data/useData'
import ItemCard from './ItemCard/ItemCard'
import ItemFilter from './ItemFilter/ItemFilter'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSnackbar } from 'notistack';
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import { testData } from './Data/FruitItem'
import { FormattedMessage } from 'react-intl'
import { ACCESS_TOKEN } from '../../constants'
import CommonDialog from '../Common/Dialog/CommonDialog'


function Store({ isAuthenticated }) {
    const [redirctTo, setRedirctTo] = useState(false);
    const [errors, setErrors] = useState({});
    const [dialog, setDialog] = useState({
        open: false,
        message: "system error"
    })
    const location = useLocation();
    let history = useHistory();
    const locale = history.location.pathname.substring(1, 3)
    let [data, isLoading] = useData(locale)

    const { enqueueSnackbar } = useSnackbar();

    let cart = []

    if (localStorage.getItem("cart")) {

        cart = JSON.parse(localStorage.getItem("cart"))
    }

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


    const handleSetQuantity = (target) => {

        setQuantity(state => ({
            ...state,
            [target.name]: target.value,
        }))
    }
    const handleSetCart = (itemName) => {

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
    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(window.location.href);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    useEffect(() => {

        const token = getUrlParameter('token');
        const error = getUrlParameter('error');

        console.log(error);

        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            setRedirctTo(true)
            window.location.href = "/"
        } else if (error) {


            setDialog(state => ({
                ...state,
                open: true,
                message: error
            }))
        }




    }, [])

    if (redirctTo) {
        console.log('redirecting...');
        return <Redirect to={`/${locale}/profile`} />
    }

    return (

        <Container className="store_container" maxWidth="md">


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
                locale={locale}
                isLoading={isLoading}
                cart={cart}
                data={data}
                selectedCountry={selectedCountry}
                selectedCategory={selectedCategory}
                quantity={quantity}
                setQuantity={handleSetQuantity}
                setCart={handleSetCart}

            />

            <CommonDialog dialog={dialog} setDialog={setDialog} />

        </Container>

    )
}

export default Store
