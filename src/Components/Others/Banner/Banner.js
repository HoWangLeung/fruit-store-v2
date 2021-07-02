import { Grid } from '@material-ui/core'
import React from 'react'
import banner from '../../../Images/banner.jpg'
import './Banner.scss'
export default function Banner() {
    return (
        <Grid
        xs={12}
        container item
        className="banner_container">
       
            <img src={banner} alt="banner" />
            <h1 className="centered text">購物滿$1000即免費送貨</h1>
        </Grid>
    )
}
