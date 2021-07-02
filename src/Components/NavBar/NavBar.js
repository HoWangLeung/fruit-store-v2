import { Button, Grid,  } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo/Logo'
import './Navbar.scss'

export default function NavBar() {
    return (
        <Grid container item className="Navbar" >
            <Logo />
            <Link to="/auth/signin">
                <Button
                    style={{

                        position: "absolute", right: "2%", top: "8px"
                    }}
                >
                    <p style={{
                        fontFamily: "Noto Sans TC",
                        fontWeight: "600",

                    }}>登記/登入</p>
                </Button>
            </Link>
        </Grid>
    )
}
