import { Box, Button, ClickAwayListener, Fade, Grid, Paper, Popper, Typography, } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { setSignInStatus } from '../Authentication/Actions/AuthenticationAction'
import { ACCESS_TOKEN } from '../../constants'
import { injectIntl } from 'react-intl';
import Logo from './Logo/Logo'
import './Navbar.scss'
import { FormattedMessage } from 'react-intl'

function NavBar({ isAuthenticated, intl }) {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const history = useHistory()
    const locale = history.location.pathname.substring(1, 3)
    const [anchorEl, setAnchorEl] = React.useState(null);



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

    const handleCartRedirect = (e) => {
        if (cart.length > 0) {
            history.push(`/${locale}/cart`)
            return
        }

        setAnchorEl(e.currentTarget);
    }
    const clickAwayHandler = () => setAnchorEl(null);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return (
        <Grid container item className="Navbar" >

            <Popper open={open} onClose={handleClose} anchorEl={anchorEl} placement='bottom' transition>
                {({ TransitionProps }) => (
                    <ClickAwayListener onClickAway={clickAwayHandler}>
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper elevation={3} style={{ padding: "15px" }}>
                                <Typography variant="p" style={{ opacity: ".6", fontWeight: "600" }}>The Basket is Empty</Typography>
                            </Paper>
                        </Fade>
                    </ClickAwayListener>
                )}
            </Popper>

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

                {/* <Link to={`/${locale}/cart`} style={{ textDecoration: "none" }}> */}
                <Button
                    onClick={handleCartRedirect}

                >
                    <p style={{
                        fontFamily: "Noto Sans TC",
                        fontWeight: "600",

                    }}><FormattedMessage id="navbar.basket" /></p>
                </Button>
                {/* </Link> */}
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
                            id="navbar.loginTitle"
                            values={{
                                message: isAuthenticated ?
                                    intl.formatMessage({ id: 'navbar.logout' }) :
                                    intl.formatMessage({ id: 'navbar.login' })
                            }}
                        />


                    </p>
                </Button>
            </div>
        </Grid>
    )
}
export default injectIntl(NavBar);