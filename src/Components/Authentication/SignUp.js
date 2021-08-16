import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import { signup } from '../../utils/APIUtils';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants/index'
import axios from 'axios'
import { CircularProgress, Dialog, DialogContentText } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { validator } from './AuthValidator';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ErrorIcon from '@material-ui/icons/Error';
import StandardSignup from './StandardSignup/StandardSignup';
import SocialLogin from './SocialLogin/SocialLogin';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link to="/" color="inherit" href="https://material-ui.com/">
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

export default function SignUp() {
    const [isLoading, setIsLoading] = useState(false)
    let history = useHistory();
    const locale = history.location.pathname.substring(1, 3)
    console.log(history);
    const [errors, setErrors] = useState({
        email: "",
        password_1: "",
        password_2: ""
    });
    const [user, setUser] = useState({
        email: "",
        password_1: "",
        password_2: ""
    })
    const [dialog, setDialog] = useState({
        open: false,
        message: "System Error"
    })
    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault()

        let isValid = validateFields()
        if (!isValid) return;

        setIsLoading(true)
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
            url: API_BASE_URL + "/api/auth/signup?exchangeName=topic-exchange&routingKey=queue.registration",
            data: payload
        }
        axios(config)
            .then(res => {
                console.log(res);
                setIsLoading(false)
                history.push(`/${locale}`);
            })
            .catch(e => {

                console.log(e.response)
                if (e.response.data.message === "Error: Email is already in use!") {
                    console.log('401 error !!!!');
                    setDialog(state => ({
                        ...state,
                        open: true,
                        message: "Email is already in use!"
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


    const validateFields = () => {
        console.log('sdfsdf');
        let isValid = true
        Object.keys(user).forEach(fieldName => {
            console.log(fieldName);
            const faildFields = validator(user, fieldName);
            console.log("faildFields ", faildFields);
            Object.values(faildFields).forEach(d => {
                if (d) {
                    isValid = false
                }
            })

            setErrors((state) => ({
                ...state,
                [fieldName]: Object.values(faildFields)[0]
            }));

        })

        console.log("isValid = ", isValid);
        return isValid
    }

    const handleChange = (e) => {



        setUser(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))

    }

    const handleBlur = e => {
        const { name: fieldName } = e.target;

        const faildFiels = validator(user, fieldName);

        setErrors((state) => ({
            ...state,
            [fieldName]: Object.values(faildFiels)[0]
        }));
    };

    useEffect(() => {
        const { password_1, password_2 } = user
        if (password_2 && password_1 !== password_2) {
            setErrors(state => ({ ...state, password_1: "", password_2: "password does not match" }))
        }

        if (password_1 == password_2) {
            setErrors(state => ({ ...state, password_1: "", password_2: "" }))
        }


    }, [user.password_1, user.password_2])
    console.log('errors ', errors);

    return (
        <Container component="main" maxWidth="xs">
            <Grid container direction="row" justifycontent="center" alignItems="center" >
                <Grid item xs={12} lg={12}  >
                    <StandardSignup
                        classes={classes}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        errors={errors}
                        user={user}
                        handleSubmit={handleSubmit}
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
            </Grid>
        </Container>
    );
}