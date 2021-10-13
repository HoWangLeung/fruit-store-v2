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
import { FormattedMessage } from 'react-intl';
const territories = [
    {
        value: 'HK',
        label: <FormattedMessage id="checkout.address.terrority1" />,
    },
    {
        value: 'KT',
        label: <FormattedMessage id="checkout.address.terrority2" />,
    },
    {
        value: 'NT',
        label: <FormattedMessage id="checkout.address.terrority3" />,
    },

];


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    //    formControl: {
    //     margin: theme.spacing(1),
    //     minWidth: 120,

    // },
}), {index: 1});
export default function Address() {
    let history = useHistory();
    console.log(history);
    const [profile, setProfile] = useState({
        firstName: "Ho Wang",
        lastName:"Leung",
        terrority:"HK",
        address: "ABC Building, DEF Road, HK",
        phone: "12345678"
    })
    const classes = useStyles();
    const handleSubmit = (e) => {

    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setProfile(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <Container maxWidth="xs" >
     
            <Typography component="h1" variant="h5">
            <FormattedMessage id="checkout.address.heading" />
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label={ <FormattedMessage id="checkout.address.firstName" />}
                    name="firstName"
                    autoComplete="firstName"
                    onChange={handleChange}
                    value={profile.firstName}
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label={ <FormattedMessage id="checkout.address.lastName" />}
                    name="lastName"
                    autoComplete="lastName"
                    onChange={handleChange}
                    value={profile.lastName}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    fullWidth
                    id="terrority"
                    select
                    label={ <FormattedMessage id="checkout.address.terrority" />}
                    name="terrority"
                    value={profile.terrority}
                    onChange={handleChange}
                    variant="outlined"
                >
                    {territories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="address"
                    label={ <FormattedMessage id="checkout.address.address" />}
                    type="address"
                    id="address"
                    onChange={handleChange}
                    value={profile.address}

                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label={ <FormattedMessage id="checkout.address.phone" />}
                    id="phone"
                    onChange={handleChange}
                    value={profile.phone}
                />

             

            </form>
        </Container>
    )
}
