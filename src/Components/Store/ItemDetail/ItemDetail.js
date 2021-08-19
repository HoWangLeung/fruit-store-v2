import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import useData from '../Data/useData';
const useStyles = makeStyles((theme) => ({
    img: {
        width: "450px",
        height: "450px", 
        objectFit: "cover",
        borderRadius:"8px"

    },

}), { index: 1 });
export default function ItemDetail({ isAuthenticated, match }) {
    const classes = useStyles()
    const history = useHistory()
    const locale = history.location.pathname.substring(1, 3)
    const { id } = match.params
    let [data, isLoading] = useData(locale)
    console.log(data);
    if (data.length <= 0) return null;
    data = data.filter(d => d.id == +id)[0]
    console.log(data);

    return (
        <Container maxWidth="lg">
            <Grid container direction="row">
                <img src={data.img} alt="2" className={classes.img} />
                <h3>Item</h3>
            </Grid>
        </Container>
    )
}
