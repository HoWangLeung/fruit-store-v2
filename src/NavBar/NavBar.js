import { Grid } from '@material-ui/core'
import React from 'react'
import Logo from './Logo/Logo'
import './Navbar.scss'

export default function NavBar() {
    return (
        <Grid container className="Navbar" >
            <Logo />
        </Grid>
    )
}
