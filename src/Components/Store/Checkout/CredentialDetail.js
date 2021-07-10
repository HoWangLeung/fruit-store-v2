import React, { useState } from 'react'
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
import { Link, useHistory } from 'react-router-dom';
import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
} from "@stripe/react-stripe-js";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import { ACCESS_TOKEN, API_BASE_URL } from '../../../constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPaymentDetail } from './Actions/CheckoutActions';
import { CircularProgress } from '@material-ui/core';
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
}), {index: 1});

function StripeInput(props) {

    const { component: Component, inputRef, ...other } = props;
    const elementRef = React.useRef();

    React.useImperativeHandle(inputRef, () => ({
        focus: () => elementRef.current.focus
    }));

    return (
        <Component onReady={element => (elementRef.current = element)} {...other} />
    );
}

function CredentialDetail(props) {
    const {setFocus,setCardDetail,cardDetail,sum}=props
   
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState(
        {
            cardNumber: null,
            cardExpiry: null,
            cardCvc: null
        }
    );
    const [isLoading, setIsLoading] = useState(false)
    let history = useHistory();

  
    const classes = useStyles();
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const CardElement = props.elements.getElement(CardNumberElement)
        const token = await props.stripe.createToken(CardElement, { name: cardDetail.cardHolder });
        console.log(token.token);
        const headers = {
            'Content-Type': 'application/json',
            token: token.token.id,
            amount: sum
        }
        if (localStorage.getItem(ACCESS_TOKEN)) {
            headers['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }

        let config = {
            headers: headers,
            method: 'post',
            url: API_BASE_URL + "/api/payment/charge"
        }
        console.log(config);

        axios(config)
            .then(res => {
                console.log(res);
                if (res.data.status === "succeeded") {
                    setIsLoading(false)
                    console.log(res);
                    dispatch(setPaymentDetail(res.data))
                    localStorage.setItem("paymentInfo", JSON.stringify(res.data));
                    localStorage.removeItem("cart")
                    history.push("/checkout/success")
                }

            })
            .catch(e => console.log(e.response))

    }

    // const handleChange = (e) => {
       
    //     setCardDetail(state => ({
    //         ...state,
    //         [e.target.name]: e.target.value
    //     }))
    // }

    const handleElementChange = (prop) => {
        console.log(prop);
        const { error, elementType } = prop
        if (error) {
            setErrorMessage(state => ({
                ...state,
                [elementType]: error.message
            }));
        } else {
            setErrorMessage(state => ({
                ...state,
                [elementType]: null
            }));
        }
    }
 
    const hasError = errorMessage !== null;
    return (
        <>
            <Typography component="h1" variant="h5">
                付款資料
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit} >
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="cardHolder"
                    label="持卡人"
                    name="cardHolder"
                    autoComplete="cardHolder"
                    onChange={(e)=>setCardDetail(e)}
                    value={cardDetail.cardHolder}
                    autoFocus
                
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="cardNumber"
                    label="信用卡號碼"
                    name="cardNumber"
                    helperText={errorMessage.cardNumber}
                    error={errorMessage.cardNumber == null ? false : true}
                    autoComplete="cardNumber"
                    onChange={handleElementChange}
                    InputLabelProps={{
                        shrink: true
                    }}
                    InputProps={{
                        inputProps: {
                            component: CardNumberElement,
                            options:{
                                style: {
                                  base: {
                                    fontSize: '16px',
                                  },
                                },
                              }
                        },
                        inputComponent: StripeInput
                    }}
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
                        container
                        item
                        direction="row"
                        justify="center"
                        alignItems="center"
                        xs={5}
                    >
                        <TextField
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            required
                            name="cardExpiry"
                            label="Expiry Date"
                            id="cardExpiry"
                            onChange={handleElementChange}
                            helperText={errorMessage.cardExpiry}
                            error={errorMessage.cardExpiry == null ? false : true}
                            InputLabelProps={{
                                shrink: true
                            }}
                            InputProps={{
                                inputProps: {

                                    component: CardExpiryElement,
                                    options:{
                                        style: {
                                          base: {
                                            fontSize: '16px',
                                          },
                                        },
                                      }
                                },
                                inputComponent: StripeInput,
                           
                            }}
                        
                        />
                    </Grid>
                    <Grid
                        container
                        item
                        direction="row"
                        justify="center"
                        alignItems="center"
                        xs={5}
                    >
                        <TextField
                     
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            required
                            name="cardCvc"
                            label="CVC"
                            id="cardCvc"
                            helperText={errorMessage.cardCvc}
                            error={errorMessage.cardCvc == null ? false : true}
                            onChange={handleElementChange}
                            onFocus={()=>setFocus(true)}
                          onBlur={()=>setFocus(false)}
                            InputLabelProps={{
                                shrink: true
                            }}
                            InputProps={{

                             
                                inputProps: {
                                   
                                    component: CardCvcElement,
                                    options:{
                                        style: {
                                          base: {
                                            fontSize: '16px',
                                          },
                                        },
                                      }
                                },
                                inputComponent: StripeInput,

                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container
                    justify="center"
                    alignItems="center" style={{ padding: '50px' }}>
                    <Button
                        disabled={isLoading}
                        type="submit"
                        color="primary" size="large" variant="contained">
                        {isLoading && <CircularProgress
                            size={18} style={{ marginRight: "10px" }} />}
                        付款
                    </Button>
                </Grid>


            </form>
        </>
    )
}

export default function InjectedCheckoutForm({setFocus,cardDetail,setCardDetail,sum}) {
    return (
        <ElementsConsumer>
            {({ stripe, elements }) => (
                <CredentialDetail stripe={stripe} elements={elements} setFocus={setFocus} 
                setCardDetail={setCardDetail}
                cardDetail={cardDetail}
                
                sum={sum}
                />
             
            )}
        </ElementsConsumer>
    );
}
