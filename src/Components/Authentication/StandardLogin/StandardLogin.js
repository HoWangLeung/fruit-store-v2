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


export default function StandardLogin({ classes, handleChange, handleSubmit, handleBlur, user, errors, isLoading, locale }) {
    return (
        <Container className={classes.paper} maxWidth="xs">
            <Avatar className={classes.avatar} >
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                <FormattedMessage id="signin.signin" />
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"

                    fullWidth
                    id="email"
                    label={<FormattedMessage id="signin.email" />}
                    name="email"
                    autoComplete="email"
                    autoFocus
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
                    name="password"
                    label={<FormattedMessage id="signin.password" />}
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    value={user.password}
                    onBlur={handleBlur}
                    error={errors.password ? true : false}
                    helperText={errors.password}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={isLoading}
                >
                    {isLoading && <CircularProgress
                        size={18} style={{ marginRight: "10px" }} />}
                    <FormattedMessage id="signin.signin" />
                </Button>
                <Grid container>
                    {/* <Grid item xs>
                    <Link to="/" >
                        <FormattedMessage id="signin.forgetPassword" />
                    </Link>
                </Grid> */}
                    <Grid item>
                        <Link to={`/${locale}/auth/signup`} variant="body2">
                            <FormattedMessage id="signin.noAccount" />
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}
