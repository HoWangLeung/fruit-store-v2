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
import { CircularProgress, DialogContentText, Divider } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { validator } from './AuthValidator';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ErrorIcon from '@material-ui/icons/Error';
import StandardLogin from './StandardLogin/StandardLogin';
import SocialLogin from './SocialLogin/SocialLogin';
import './Login.scss'

const useStyles = makeStyles((theme) => ({
    outerContainer: {

    },
    paper: {
        marginBottom: "25px",
        width: "100%",
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    paper_social_login: {
        minHeight: "100vh",
        height: '100%',
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',


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

    const dispatch = useDispatch()
    const classes = useStyles();
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [dialog, setDialog] = useState({
        open: false,
        message: "System Error"
    })

    const handleChange = (e) => {
        setUser(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        let isError = Object.values(errors).filter(d => {

            if (d !== undefined || d !== "") {
                return d
            }
        }).length > 0
        if (isError) {
            return;
        }


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


        axios(config)
            .then(res => {

                localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
                setIsLoading(false)
                dispatch(setSignInStatus(true))
                history.push(`/${locale}`)
            })
            .catch(e => {
                console.log(e.message);
                if (e.message === "Request failed with status code 401") {
                    console.log('401 error !!!!');
                    setDialog(state => ({
                        ...state,
                        open: true,
                        message: "Invalid username or Password"
                    }))
                    setIsLoading(false)
                } else {
                    setDialog(state => ({
                        ...state,
                        open: true,
                        message: "System Error"
                    }))
                    setIsLoading(false)
                }



            })


    }
    const handleBlur = e => {
        const { name: fieldName } = e.target;

        const faildFiels = validator(user, fieldName);

        setErrors((state) => ({
            ...state,
            [fieldName]: Object.values(faildFiels)[0]
        }));
    };
    return (

        <Container >
            <Grid container direction="row" justifycontent="center" alignItems="center" >

                <Grid item xs={12} lg={12}  >

                    <StandardLogin
                        classes={classes}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        user={user}
                        errors={errors}
                        isLoading={isLoading}
                        locale={locale}
                    />


                </Grid>


                <Grid xs={12} item lg={12} >

                    <SocialLogin
                        history={history}
                        classes={classes}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        user={user}
                        errors={errors}
                        isLoading={isLoading}
                        locale={locale}
                    />


                </Grid>

            </Grid>
            <Dialog
                open={dialog.open}
                onClose={() => setDialog(state => ({ ...state, open: false }))}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
                maxWidth="xs"
            >
                <DialogTitle id="alert-dialog-title">
                    <Grid container alignItems="center" justifyContent="center">
                        <ErrorIcon style={{ fill: '#ff7961', fontSize: "200%", marginRight: "10px" }} />
                        <Typography variant="span" align="center">Error Message</Typography>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ alignSelf: "center" }} >
                        <Typography align="center">{dialog.message}</Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialog(state => ({ ...state, open: false }))} autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
            
        </Container>





    );
}
