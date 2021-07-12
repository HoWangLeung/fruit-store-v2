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
            localStorage.removeItem(ACCESS_TOKEN)
            dispatch(setSignInStatus(false))
        }
    }

    return (
        <Grid container item className="Navbar" >
            <Logo />

            <div style={{

                position: "absolute", right: "2%", top: "8px"
            }}>
                <Link to="/cart" style={{ textDecoration: "none" }}>
                    <Button


                    >
                        <p style={{
                            fontFamily: "Noto Sans TC",
                            fontWeight: "600",

                        }}>購物籃</p>
                    </Button>
                </Link>
                {isAuthenticated && <Link to="/user/settings" style={{ textDecoration: "none" }}>
                    <Button
                    >
                        <p style={{
                            fontFamily: "Noto Sans TC",
                            fontWeight: "600",

                        }}>個人檔案</p>
                    </Button>
                </Link>}
                <Button
                    onClick={handleClick}

                >
                    <p style={{
                        fontFamily: "Noto Sans TC",
                        fontWeight: "600",

                    }}>{isAuthenticated ? "登出" : "登記/登入"}</p>
                </Button>
            </div>
        </Grid>
    )
}
