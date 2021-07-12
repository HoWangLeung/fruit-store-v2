import React, { useEffect, useRef, useState } from 'react'
import { Container, Grid, Paper, Button, Backdrop, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './Profile.scss'
import useOrderData from './useOrderData';
import OrderHistory from './OrderHistory';
import PersonalInfo from './PersonalInfo';
import useProfileData from './useProfileData';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
}, { index: 1 });


export default function Profile() {
    const classes = useStyles();

 
   
    let userData = useProfileData()
   
    let orderData = useOrderData()
    console.log(orderData);
    if (userData.length === 0) return <Backdrop open style={{ backgroundColor: "#fafafa" }} >
        <CircularProgress />
    </Backdrop>






    return (
        <Container maxWidth="md"   >
            <Grid container
                direction="row"
                style={{ height: "100vh", }}
                justify="center"
                alignItems="center"
            >

                <Grid container item
                    justify="center"
                    alignItems="center">
                    <PersonalInfo user={userData}  />
                </Grid>
                <Grid container item
                    justify="center"
                    alignItems="center">

                    <OrderHistory
                        classes={classes}
                        orderData={orderData}

                    />

                </Grid>
            </Grid>
        </Container>
    )
}
