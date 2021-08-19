import React from 'react'
import { Grid, Card, CardActions, CardContent, Button, CardMedia, Typography } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as LostSvg } from '../../../../Images/Lost.svg';
import {

    Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    menuPaper: {
        maxHeight: 300
    }
}), { index: 1 });
export default function MyCardContent({ locale, data, page, quantity, setQuantity, setCart, cart }) {
    const classes = useStyles()
    return <>

        {data
            .map((item, i) => {
                return (
                    <Grid
                        key={i}
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className="itemCard_inner_container"
                        container
                        item
                        xs={12} md={6} lg={4}

                    >
                        <Card className="itemCard_card" variant="outlined" key={i} elevation={8}    >
                            <CardContent style={{ padding: "0px" }}  >
                                <img src={item.img} alt="pic" />
                                <div style={{ padding: "0px 10px 10px 10px" }} >
                                    {/* <Link to={`/${locale}/product/${item.id}`} > */}
                                        <h3 style={{ fontWeight: 600 }} >{item.name}</h3>
                                    {/* </Link> */}
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="center"
                                    >
                                        <span><FormattedMessage id="store.price" />: ${item.price}</span>
                                        <span><FormattedMessage id="store.country" />: {item.country} </span>
                                    </Grid>


                                </div>
                                <Grid
                                    style={{ padding: "10px" }}
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                >
                                    <FormControl
                                        size="small"
                                        variant="outlined"
                                        className={classes.formControl}
                                    >
                                        <InputLabel id={i}><FormattedMessage id="store.quantity" /></InputLabel>
                                        <Select
                                            label="Quantity"
                                            labelId={item.name}
                                            id={item.name}
                                            name={item.name}

                                            value={quantity.name}
                                            defaultValue={1}
                                            onChange={(e) => setQuantity(e.target)}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {Array.from(Array(50).keys()).map((value, i) => (
                                                <MenuItem key={i} value={value + 1}>
                                                    {value + 1}
                                                </MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>
                                    <Button
                                        value={item.name}
                                        onClick={() => setCart(item.name)}
                                        variant="contained" color="primary" ><FormattedMessage id="store.add" /></Button>
                                </Grid>

                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}

        {data.length == 0 &&
            <Grid container direction="column" justifyContent="center" alignItems="center" >
                <Typography style={{ fontWeight: "600", padding: "30px" }} variant="p">
                    <FormattedMessage id="store.noCombination" />
                </Typography>
                <LostSvg />
            </Grid>

        }
    </>

}
