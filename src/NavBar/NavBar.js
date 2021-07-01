import { Grid } from '@material-ui/core'
import React from 'react'
import Logo from './Logo/Logo'
import './Navbar.scss'

export default function NavBar() {
    return (
        <Grid container item className="Navbar" >
            <Logo />
        </Grid>
    )
}
