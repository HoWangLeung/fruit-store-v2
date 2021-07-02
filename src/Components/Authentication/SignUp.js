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
import { signup } from '../../utils/APIUtils';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants/index'
import axios from 'axios'
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link to="/" color="inherit" href="https://material-ui.com/">
                Your Website
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
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    let history = useHistory();
    console.log(history);
    const [user, setUser] = useState({
        email: "",
        password_1: "",
        password_2: ""
    })
    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault()

        let payload = {
            email: user.email,
            password: user.password_1
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
            url: API_BASE_URL + "/api/auth/signup",
            data: payload
        }
        axios(config)
            .then(res => {
         
                history.push("/");
            })
            .catch(e => console.log(e.response))
    }

    const handleChange = (e) => {

        setUser(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
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
                        onChange={handleChange}
                        value={user.email}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password_1"
                        label="Password"
                        type="password_1"
                        id="password_1"
                        onChange={handleChange}
                        value={user.password_1}
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password_2"
                        label="confirm password"
                        type="password_2"
                        id="password_2"
                        autoComplete="current-password"
                        onChange={handleChange}
                        value={user.password_2}
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
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/auth/signup" variant="body2">
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