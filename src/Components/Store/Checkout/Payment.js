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
const territories = [
    {
        value: 'HK',
        label: '香港島',
    },
    {
        value: 'KT',
        label: '九龍',
    },
    {
        value: 'NT',
        label: '新界',
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
}));
export default function Payment() {
    let history = useHistory();
    console.log(history);
    const [cardDetail, setCardDetail] = useState({
        cardHolder: "Leung Ho Wang",
        cardNumber: "1234 1234 1234 1234",
        expiryDate: "07/02",
        CXC: "123"
    })
    const classes = useStyles();
    const handleSubmit = (e) => {

    }

    const handleChange = (e) => {

        setCardDetail(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <Container maxWidth="xs" style={{ marginBottom: "50px" }}  >
            <Typography component="h1" variant="h5">
                付款資料
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="持卡人"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                    value={cardDetail.cardHolder}
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="信用卡號碼"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                    value={cardDetail.cardNumber}
                    autoFocus
                />
                <Grid
                    container
                    item
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid
                        item
                        direction="row"
                        justify="center"
                        alignItems="center"
                        xs={5}
                    >
                        <TextField

                            variant="outlined"
                            margin="normal"
                            required
                            name="phone"
                            label="Phone"
                            id="phone"
                            onChange={handleChange}
                            value={cardDetail.expiryDate}
                        />
                    </Grid>
                    <Grid
                        item
                        direction="row"
                        justify="center"
                        alignItems="center"
                        xs={5}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            name="phone"
                            label="Phone"
                            id="phone"
                            onChange={handleChange}
                            value={cardDetail.CXC}
                        />
                    </Grid>
                </Grid>
                <Grid container
                    justify="center"
                    alignItems="center">
                    <Button
                        color="primary" size="large" variant="contained">
                        付款
                    </Button>
                </Grid>


            </form>
        </Container>
    )
}
