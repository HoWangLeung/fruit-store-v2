import { Button, Grid, } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { setSignInStatus } from '../Authentication/Actions/AuthenticationAction'
import { ACCESS_TOKEN } from '../../constants'

import Logo from './Logo/Logo'
import './Navbar.scss'
import { FormattedMessage } from 'react-intl'

export default function NavBar({ isAuthenticated }) {
    const history = useHistory()
    const locale = history.location.pathname.substring(1, 3)

    const dispatch = useDispatch()
    const handleClick = (e) => {
        if (!isAuthenticated) {
            history.push(`${locale}/auth/signin`)
        } else {
            localStorage.removeItem(ACCESS_TOKEN)
            dispatch(setSignInStatus(false))
        }
    }

    const handleLocale = e => {
        let current = localStorage.getItem('locale');
        if (locale === 'en') {
            localStorage.setItem('locale', 'zh')
            history.push(`/zh`)
            window.location.reload();
        } else {
            localStorage.setItem('locale', 'en')
            history.push(`/en`)
            window.location.reload();
        }
    }

    return (
        <Grid container item className="Navbar" >
            <Logo />

            <div style={{

                position: "absolute", right: "2%", top: "8px"
            }}>


                <Button

                    onClick={handleLocale}
                >
                    <p style={{
                        fontFamily: "Noto Sans TC",
                        fontWeight: "600",

                    }}>{locale === "en" ? "中文" : "English"}</p>
                </Button>

                <Link to={`/${locale}/cart`} style={{ textDecoration: "none" }}>
                    <Button


                    >
                        <p style={{
                            fontFamily: "Noto Sans TC",
                            fontWeight: "600",

                        }}><FormattedMessage id="navbar.basket" /></p>
                    </Button>
                </Link>
                {isAuthenticated && <Link to={`${locale}/user/settings`} style={{ textDecoration: "none" }}>
                    <Button
                    >
                        <p style={{
                            fontFamily: "Noto Sans TC",
                            fontWeight: "600",

                        }}><FormattedMessage id="navbar.profile" /></p>
                    </Button>
                </Link>}
                <Button
                    onClick={handleClick}

                >
                    <p style={{
                        fontFamily: "Noto Sans TC",
                        fontWeight: "600",

                    }}>
                        <FormattedMessage
                            id="navbar.login"
                            values={{
                                message: isAuthenticated ? "登出" : "登記/登入"
                            }}
                        />


                    </p>
                </Button>
            </div>
        </Grid>
    )
}
