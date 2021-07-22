import { Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import { FormattedMessage } from 'react-intl';
import banner from '../../../Images/banner.jpg'
import { ReactComponent as CoverSvg } from '../../../Images/cover.svg';



import './Banner.scss'
export default function Banner() {

    const handleClick = () => {

        document.querySelector('.store_container').scrollIntoView({ behavior: 'smooth' });


    }
    return (

        <Grid
            direction="row"
            justify="center"
            alignItems="center"
            container
        >
            <Grid
                container item
                lg={6} className="banner_container"
                direction="column"
                justify="center"
                alignItems="center"
                style={{ padding: "50px" }}
            >

                <Grid item   >
                    <h1><FormattedMessage id="banner.line1" /></h1>

                    <p style={{ color: "#646e73", fontSize: "1.5em" }}>

                        <FormattedMessage id="banner.line2" />
                        
                        <br />
                        <FormattedMessage id="banner.line3" />
                    </p>

                </Grid>
                <Button onClick={handleClick} color="primary" size="large" variant="contained"  >  <FormattedMessage id="banner.startBtn" /></Button>
            </Grid>
            <Grid item lg={6} className="banner_container">
                <CoverSvg className="cover_svg" />
            </Grid>


        </Grid>

    )
}
