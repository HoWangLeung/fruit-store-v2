import React from 'react'
import { Grid, Card, CardActions, CardContent, Button, CardMedia } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
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
}));
export default function MyCardContent({ data, page, quantity, setQuantity, setCart, cart }) {
    const classes = useStyles()
    return data
        // .slice(begin, end)
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
                    <Card className="itemCard_card" variant="outlined" key={i}    >
                        <CardContent style={{ padding: "0px" }}  >
                            <img src={item.img} alt="pic" />
                            <div style={{ padding: "0px 10px 10px 10px" }} >
                                <h3 style={{ fontWeight: 600 }} >{item.name}</h3>
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                >
                                    <span>價錢: ${item.price}</span>
                                    <span>產地: {item.country} </span>
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
                                    <InputLabel id={i}>Quantity</InputLabel>
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
                                    value={i}
                                    onClick={() => setCart(i)}
                                    variant="contained" color="primary" >Add</Button>
                            </Grid>

                        </CardContent>
                    </Card>
                </Grid>
            )
        })

}
