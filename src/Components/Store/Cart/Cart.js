import { Button, Divider, Grid, Paper, TextField } from '@material-ui/core';
import React from 'react'
import './Cart.scss'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
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
}));
function Cart() {
    const classes = useStyles();
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    return (
        <Container component="main"  >
            <h1  >購物籃</h1>
            <Divider />
            <Grid
            style={{margin:"20px 0px"}}
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
                        key={i}
                        container item
                            direction="row"
                            justify="center"
                            alignItems="center"   >
                            <div className="cart_img_container ">
                                <img src={item.img} />
                            </div>
                            <div className="cart_container"  >
                                <span>貨品: {item.name}</span>

                                <span>產地: {item.country}</span>
                                <span>價錢: ${item.price}</span>
                            </div>

                            <div
                                className="cart_container"
                                style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
                                <IconButton aria-label="Reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <div style={{ padding: "20px" }}>
                                    1
                                </div>

                                <IconButton aria-label="Add">
                                    <AddIcon />
                                </IconButton>
                            </div>
                            <div className="cart_container" >
                                <IconButton aria-label="delete">
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
                <div>
                    <div>
                        <h3>小計:$ 1234</h3>
                    </div>
                    <Link to="/checkout">
                        <Button variant="contained" color="primary">
                            前往付款
                        </Button>
                    </Link>
                </div>
            </Grid>


        </Container>
    )
}

export default Cart
