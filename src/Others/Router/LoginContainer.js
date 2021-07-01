import { Grid } from '@material-ui/core'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Login from '../../Components/Authentication/Login'
import NavBar from '../../NavBar/NavBar'
import Store from '../../Store/Store'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import WhatsappIcon from '../WhatsappIcon/WhatsappIcon'

function LoginContainer() {
    console.log('in loginContainer');
    return (
        <>

            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
            >


                {/* <Route exact path="/" render={() => <Redirect to="/auth/sigin" />} /> */}
                {/* <Route path="/auth/sigin" component={Login} /> */}
                <Login />

            </Grid>

        </>
    )
}

export default LoginContainer
