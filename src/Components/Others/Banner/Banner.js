import { Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import banner from '../../../Images/banner.jpg'
import { ReactComponent as CoverSvg } from '../../../Images/cover.svg';

import './Banner.scss'
export default function Banner() {
    return (

        <Grid
            direction="row"
            justify="center"
            alignItems="center"

            container
        >
            <Grid container item lg={6} className="banner_container"
                direction="column"
                justify="center"
                alignItems="center"
            >
          
                <Grid item justify="flex-start">
                <h2>點擊開始購物</h2>
                    <p style={{ color: "#646e73" }}>專營各國水果,價廉物美 <br />
                        購物消費滿1000元, 港島區免費送貨</p>
                </Grid>
                <Button color="primary" size="large" variant="contained"  >開始</Button>
            </Grid>
            <Grid item lg={6} className="banner_container">
                <CoverSvg className="cover_svg" />
            </Grid>


        </Grid>

    )
}
