import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import { Link, useHistory } from 'react-router-dom';

import { CircularProgress, Container, makeStyles, useTheme, } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, GOOGLE_AUTH_URL } from '../../../constants';
import { ReactComponent as GoogleSVG } from '../../../Images/googleAuth.svg';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function SocialLogin({
    history,
    classes, handleChange, handleSubmit, handleBlur, user, errors, isLoading, locale, }) {
    console.log();
    console.log(history);
    const isSignupPage = history.location.pathname.includes("signup")


    return (
        <Container className={classes.paper} maxWidth="xs">


            <Grid container direction="column" justifycontent="center" alignItems="center" spacing={3} >
                <Grid>
                    <Typography   >OR</Typography>
                </Grid>

                <Grid container item direction="column" justifycontent="center" alignItems="center" spacing={3} >
                    <Grid item>
                        <a href={FACEBOOK_AUTH_URL}>
                            <div
                                className="facebook-btn" >
                                <div className="facebook-icon-wrapper"><FacebookIcon /></div>
                                <span className="social_icon_text">    <FormattedMessage id={isSignupPage ? 'signup.facebook' : 'signin.facebook'} /></span>
                            </div>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href={GOOGLE_AUTH_URL}>
                            <div className="google-btn">
                                <div className="google-icon-wrapper">
                                    <img className="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                                </div>

                                <p className="btn-text"><b>
                                    <FormattedMessage id={isSignupPage ? 'signup.google' : 'signin.google'} />
                                </b></p>

                            </div>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href={GITHUB_AUTH_URL}>
                            <div

                                className="github-btn" name="github">
                                <div className="github-icon-wrapper">
                                    <GitHubIcon style={{ height: "18px", width: "18px" }} />
                                </div>
                                <span className="social_icon_text">    <FormattedMessage id={isSignupPage ? 'signup.github' : 'signin.github'} /></span>

                            </div>
                        </a>
                    </Grid>

                </Grid>

            </Grid>






        </Container>
    )
}
