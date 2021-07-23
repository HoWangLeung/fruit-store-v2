import { Button, CircularProgress, Divider, Grid, Paper, TextField } from '@material-ui/core';
import React, { useRef } from 'react'
import './Cart.scss'
import { Link, useHistory } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useEffect } from 'react';
import { useState } from 'react';
import { ACCESS_TOKEN, API_BASE_URL } from '../../../constants';
import axios from 'axios';
import useCartAnimation from './useCartAnimation';
import gsap from 'gsap'
import { FormattedMessage } from 'react-intl';
const useStyles = makeStyles((theme) => ({
    paper: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
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
}), { index: 1 });
function Cart({isAuthenticated}) {
    const nodes = useRef([])
    nodes.current = []
    // const addToCart = useCartAnimation(cartItems)
    const history = useHistory()
    const locale = history.location.pathname.substring(1, 3)
    const classes = useStyles();
    const [isLoading, setIsloading] = useState(false)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
    // console.log(JSON.stringify(cart));
    let sum = 0;
    cart.map(d => {
        d.total = d.price * d.quantity
        sum += d.total
        return d
    })
    const addToNodes = el => {

        if (el && !nodes.current.includes(el)) {

            nodes.current.push(el);
        }
    };
    const addOne = (itemName) => {

        let newCart = cart.map(d => {

            if (itemName === d.name) {
                d.quantity += 1
            }
            return d
        })
        setCart(newCart)
        localStorage.setItem("cart", JSON.stringify(newCart))
    }
    const minusOne = (itemName) => {

        let newCart = cart.map(d => {
            if (itemName === d.name) {
                if (d.quantity > 1)
                    d.quantity -= 1
            }
            return d
        })
        setCart(newCart)
        localStorage.setItem("cart", JSON.stringify(newCart))
    }

    const removeElement = (element) => {
        console.log(element);
        if (typeof (element) === "string") {
            element = document.querySelector(element);
        }
        return function () {
            element.parentNode.removeChild(element);
        };
    }
    const deleteOne = (itemName) => {
        nodes.current.map(e => {
            if (e.id === itemName) {
                console.log('fired again ?');
                gsap.to(e, {
                    duration: .5,
                    opacity: 0,
                    x: "100%",
                    ease: "Power3.easeInOut",

                })
                    .then((e) => {
                        gsap.set(e.targets()[0], { x: 0, opacity: 1 });
                    })
                    .then(() => {
                        deleteAfterAnimation(itemName)
                    })

            }
        })

    }

    const deleteAfterAnimation = (itemName) => {
        console.log(itemName);
        let newCart = cart.filter(d => d.name !== itemName)
        console.log(newCart);
        setCart(newCart)
        localStorage.setItem("cart", JSON.stringify(newCart))
    }

    const createPendingOrder = () => {
        setIsloading(true)
        let orderItems = cart.map(d => {
            let newItems = {
                ...d,
                productId: d.id
            }
            delete newItems.id
            return newItems
        })
        const headers = {
            'Content-Type': 'application/json',
        }
        let payload = {
            orderItems
        }

        let config = {
            headers: headers,
            method: 'post',
            url: `${API_BASE_URL}/api/orders/add`,
            data: payload
        }
        console.log(payload);
        axios(config)
            .then(res => {
                console.log(res);
                setIsloading(false)
                history.push(`/${locale}/checkout`)

            })

    }
    useEffect(() => {

        gsap.from(nodes.current, {
            duration: .5,
            stagger: 0.08,

            scale: .8,
            ease: "Power3.easeInOut"
        });

        return () => {
            nodes.current = [];
        }

    }, [nodes])

    return (
        <Container component="main"  >
            <h1  > <FormattedMessage id="basket.heading" /></h1>
            <Divider />
            <Grid
                style={{ margin: "20px 0px" }}
                spacing={2}
                container
                item
                direction="row"
                justify="center"
                alignItems="center"
            >


                {cart.map((item, i) => {
                    return (
                        <Grid
                            id={item.name}
                            ref={addToNodes}
                            key={i}
                            container item
                            direction="row"
                            justify="center"
                            alignItems="center"   >
                            <div className="cart_img_container ">
                                <img src={item.img} />
                            </div>
                            <div className="cart_container"  >
                                <span>
                                    <FormattedMessage id="basket.item" />: {item.name}</span>

                                <span><FormattedMessage id="basket.country" />: {item.country}</span>
                                <span><FormattedMessage id="basket.price" />: ${item.price}</span>
                            </div>

                            <div
                                className="cart_container"
                                style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
                                <IconButton aria-label="Reduce" onClick={() => minusOne(item.name)}  >
                                    <RemoveIcon />
                                </IconButton>
                                <div style={{ padding: "20px" }}>
                                    {item.quantity}
                                </div>

                                <IconButton aria-label="Add" onClick={() => addOne(item.name)}>
                                    <AddIcon />
                                </IconButton>
                            </div>
                            <div className="cart_container" >
                                <IconButton aria-label="delete" onClick={() => deleteOne(item.name)} >
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </Grid>
                    )

                })}
            </Grid>
            <Divider />
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-end"
            >
                <div style={{ paddingBottom: "30px" }} >
                    <div>
                        <h3>        <FormattedMessage id="basket.subTotal" />:$ {sum}</h3>
                    </div>

                    <Button variant="contained" color="primary"
                        onClick={createPendingOrder}
                        disabled={isLoading || cart.length==0 }

                    >
                        {isLoading && <CircularProgress
                            size={18} style={{ marginRight: "10px" }} />}
                        <FormattedMessage id="basket.checkout" />
                    </Button>

                </div>
            </Grid>


        </Container>
    )
}

export default Cart
