import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import Address from './Address';
import OrderSummary from './OrderSummary';
import Payment from './Payment';


export default function Checkout() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return (

        <Grid
            style={{ height: "100vh" }}
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid
                container item lg={4}
                direction="column"
                
            >
                <OrderSummary  />
                <Address />

            </Grid>
            <Grid container item lg={8} >
                <Payment />
            </Grid>
        </Grid>



    );
}