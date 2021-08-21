import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import { Link, useHistory } from 'react-router-dom';

import { CircularProgress, Container, } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

export default function StandardSignup({ classes, handleChange, handleBlur, errors, user, isLoading, locale, handleSubmit }) {
    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label={<FormattedMessage id="signup.email" />}
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}

                    value={user.email}

                    onBlur={handleBlur}
                    error={errors.email ? true : false}
                    helperText={errors.email}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password_1"
                    label={<FormattedMessage id="signup.password" />}
                    type="password_1"
                    id="password_1"
                    onChange={handleChange}
                    value={user.password_1}
                    onBlur={handleBlur}
                    autoComplete="current-password"
                    error={errors.password_1 ? true : false}
                    helperText={errors.password_1}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password_2"
                    label={<FormattedMessage id="signup.confirmPassword" />}
                    type="password_2"
                    id="password_2"
                    autoComplete="current-password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={user.password_2}
                    error={errors.password_2 ? true : false}
                    helperText={errors.password_2}
                />
                {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}
                <Button
                    disabled={isLoading}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >

                    {isLoading && <CircularProgress
                        size={18} style={{ marginRight: "10px" }} />}
                    <FormattedMessage id="signup.signup" />
                </Button>

                <Link to={`/${locale}/auth/signin`} variant="body2">
                    <FormattedMessage id="signup.haveAccount" />
                </Link>

            </form>
        </div>
    )
}
