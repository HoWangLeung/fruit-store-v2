import { Grid } from '@material-ui/core'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../../NavBar/NavBar'
import Store from '../../Store/Store'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import WhatsappIcon from '../WhatsappIcon/WhatsappIcon'
 
function DefaultContainer() {
    return (
        <>

            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <NavBar />
                <Banner />
                <Store   />
                {/* <Switch> */}
                    {/* <Route exact path="/" render={props => <Store  {...props} />} /> */}
                    {/* <Route exact path="/auth/login" render={props => <p>Hello</p>} /> */}
                {/* </Switch> */}
                <Footer />
            </Grid>

            <WhatsappIcon />
        </>
    )
}

export default DefaultContainer
