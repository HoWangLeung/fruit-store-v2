import React from 'react';
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
import { useState } from 'react';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants/index'
import axios from 'axios'
import { setSignInStatus } from './Actions/AuthenticationAction';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                wahkee-fruitstore.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}), { index: 1 });

export default function SignIn() {
    const [isLoading, setIsLoading] = useState(false)
    let history = useHistory();
    const locale = history.location.pathname.substring(1, 3)
    console.log(locale);
    const dispatch = useDispatch()
    const classes = useStyles();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setUser(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        let payload = {
            email: user.email,
            password: user.password
        }

        const headers = {
            'Content-Type': 'application/json',
        }
        if (localStorage.getItem(ACCESS_TOKEN)) {
            headers['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }

        let config = {
            headers: headers,
            method: 'post',
            url: API_BASE_URL + "/api/auth/signin",
            data: payload
        }
        console.log(config);

        axios(config)
            .then(res => {
                console.log(res);
                localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
                setIsLoading(false)
                dispatch(setSignInStatus(true))
                history.push(`/${locale}`)
            })
            .catch(e => console.log(e.response))
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar} >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    登入
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                        value={user.email}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                        value={user.password}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={isLoading}
                    >
                        {isLoading && <CircularProgress
                            size={18} style={{ marginRight: "10px" }} />}
                        登入
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link  to="/" >
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to={`/${locale}/auth/signup`} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}