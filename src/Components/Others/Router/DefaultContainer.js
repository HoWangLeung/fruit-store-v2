import { Grid } from '@material-ui/core'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import NavBar from '../../NavBar/NavBar'
import Profile from '../../Profile/Profile'
import Cart from '../../Store/Cart/Cart'
import ItemDetail from '../../Store/ItemDetail/ItemDetail'
import Store from '../../Store/Store'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import WhatsappIcon from '../WhatsappIcon/WhatsappIcon'
import StoreContainer from './StoreContainer'

function DefaultContainer({ isAuthenticated }) {
    return (
        <>
            <NavBar isAuthenticated={isAuthenticated} />
            <Route exact path="/:lang" render={props => <StoreContainer isAuthenticated={isAuthenticated} />} />
            <Route exact path="/:lang/product/:id" render={props => <ItemDetail isAuthenticated={isAuthenticated} {...props} />} />
          
            <Redirect from="/" to="/en" />

        </>
    )
}

export default DefaultContainer
