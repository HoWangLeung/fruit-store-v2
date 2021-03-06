import { Container, Grid, Paper } from '@material-ui/core'
import React from 'react'
import './CreditCard.scss'
import { ReactComponent as VisaLogo } from './visa.svg'
import { ReactComponent as Chip } from './chip.svg'
import { ReactComponent as Earth } from './earth.svg'

export default function CreditCard({cardHolder}) {
    return (

        <Paper elevation={8} className="creditCard_container">
            <Grid container item xs={12}>

                <Earth className="creditCard_earth" />
                <Chip className="creditCard_chip" />
                <VisaLogo className="creditCard_visa" />
                <div className="creditCard_number">
                    <div>
                        **** **** **** ****
                    </div>
                </div>
                <div className="creditCard_cardHolder">
                    <div>
                        {cardHolder}
                    </div>
                   
                </div>

                <div className="creditCard_expDate">
                    <div>
                        Expiry :  **/** 
                    </div>
                 
                </div>
            </Grid>
        </Paper>

    )
}
