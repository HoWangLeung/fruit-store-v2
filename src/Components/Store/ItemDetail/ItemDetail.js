import { Button, Container, Grid, makeStyles, Typography, Paper, Box } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import useData from '../Data/useData';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useSnackbar } from 'notistack';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: "50px"
    },
    itemContainer: {
        position: "relative"
    },
    img: {
       width: "450px",
        height: "450px",
        minWidth:"280px",
        minHeight: "200px",
        objectFit: "cover",
        borderRadius: "8px"

    },

    flagImg: {
        position: "absolute",
        right: "24px",
        top: "0px",

    }

}), { index: 1 });
export default function ItemDetail({ isAuthenticated, match }) {
    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles()
    const history = useHistory()
    const locale = history.location.pathname.substring(1, 3)
    const { id } = match.params
    const [item, setItem] = useState({
        quantity: 1,
    })
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
    // console.log(JSON.stringify(cart));
    let sum = 0;
    cart.map(d => {
        d.total = d.price * d.quantity
        sum += d.total
        return d
    })

    let [data, isLoading] = useData(locale)
    let originalData = data
    if (data.length <= 0) return null;
    data = data.filter(d => d.id == +id)
    data = data.map(d => {
        d.name = d.localizations[`${locale}`].name
        d.category = d.localizations[`${locale}`].category
        d.country = d.localizations[`${locale}`].country
        d.unit = d.localizations[`${locale}`].unit
        d.description = d.localizations[`${locale}`].description
        d.countryCode = d.localizations[`${locale}`].countryCode
        d.quantity = 0
        return d
    })[0]

    const addOne = () => {

        setItem(state => ({
            ...state,
            quantity: state.quantity + 1
        }))
    }
    const minusOne = () => {
        if (item.quantity > 1)
            setItem(state => ({
                ...state,
                quantity: state.quantity - 1
            }))
    }

    const handleAdd = () => {
        data.quantity = item.quantity
        let isExist = cart.some(obj => obj.name === data.name);
        console.log('is exist = ', isExist);
        if (!isExist) {
            cart.push(data)
        } else {
            cart.map(d => {
                if (d.id === data.id) {
                    d.quantity = data.quantity
                    return d
                }
            })
        }


        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart))
        enqueueSnackbar(
            <FormattedMessage id="store.successAdd" />
            ,
            { variant: 'success', autoHideDuration: 2000, });
    }



    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container direction="row" >
                <Grid lg={6} container item direction="row">
                    <img src={data.img} alt="2" className={classes.img} />
                </Grid>
                <Grid lg={6} container item direction="column" justify="space-between" className={classes.itemContainer}>

                    <Typography variant="h4">{data.category}</Typography>

                    <img className={classes.flagImg} src={`https://www.countryflags.io/${data.countryCode}/shiny/64.png`}></img>

                    <Typography variant="h6">{data.name}</Typography>
                    <Typography>HK$ {data.price}</Typography>

                    <Typography>{data.description}</Typography>

                    <div
                        className="cart_container"
                        style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
                        <IconButton aria-label="Reduce" onClick={minusOne}  >
                            <RemoveIcon />
                        </IconButton>
                        <div style={{ padding: "20px" }}>
                            {item.quantity}
                        </div>

                        <IconButton aria-label="Add" onClick={addOne} >
                            <AddIcon />
                        </IconButton>
                    </div>

                    <Button variant="contained" color="primary" onClick={handleAdd}>Add</Button>

                </Grid>
            </Grid>

        </Container>
    )
}
