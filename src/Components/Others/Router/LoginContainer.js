import { Grid } from '@material-ui/core'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Login from '../../Authentication/Login'
import SignUp from '../../Authentication/SignUp'
import NavBar from '../../NavBar/NavBar'
import Store from '../../Store/Store'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import WhatsappIcon from '../WhatsappIcon/WhatsappIcon'

function LoginContainer() {
 
    return (
        <>

           
 
                <Login />

            

        </>
    )
}

export default LoginContainer
