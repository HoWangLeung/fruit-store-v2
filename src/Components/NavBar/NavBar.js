import { Button, Grid, } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { setSignInStatus } from '../Authentication/Actions/AuthenticationAction'
import { ACCESS_TOKEN } from '../../constants'

import Logo from './Logo/Logo'
import './Navbar.scss'

export default function NavBar({ isAuthenticated }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const handleClick = (e) => {
        if (!isAuthenticated) {
            history.push("/auth/signin")
        } else {
            localStorage.setItem(ACCESS_TOKEN, null);
            dispatch(setSignInStatus(false))
        }
    }

    return (
        <Grid container item className="Navbar" >
            <Logo />
            <Button
                onClick={handleClick}
                style={{

                    position: "absolute", right: "2%", top: "8px"
                }}
            >
                <p style={{
                    fontFamily: "Noto Sans TC",
                    fontWeight: "600",

                }}>{isAuthenticated ? "登出" : "登記/登入"}</p>
            </Button>
        </Grid>
    )
}
