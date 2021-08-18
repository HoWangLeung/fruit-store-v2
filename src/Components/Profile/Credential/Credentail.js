import React, { useState } from 'react'

import { Container, Grid, Paper, Button, Divider, Box, Chip, Collapse, Typography, IconButton, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';


import SubTable from '../Personal/SubTable';


const useStyles = makeStyles({
    form: {

    },
}, { index: 1 });
export default function Credential({ locale, password, handleBlur, handleChange, handleSubmit, errors, }) {
    const classes = useStyles();


    return (


        <Box style={{ display: "flex", flexDirection: "column", width: '100%' }}>
            <Grid container
                direction="column"
                justify="flex-start"
                alignItems="flex-start" >
                <Typography noWrap variant="h5" style={{ alignSelf: "flex-start" }}>
                    {/* <FormattedMessage id="profile.history.heading" /> */}
                    Credential
                </Typography>
                <Typography noWrap style={{ color: "#2E3C42", opacity: ".6", marginTop: "5px", marginBottom: "15px" }} >You can modify your ceredential </Typography>

            </Grid>
            <Paper elevation={3} style={{ padding: "30px", width: '100%', borderRadius: "8px" }} >

                <form className={classes.form} onSubmit={handleSubmit} name="credential">
                    <TextField
                        onBlur={handleBlur}
                        // error={errors.title ? true : false}
                        // helperText={errors.title}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="currentPassword"
                        label="Current Password"
                        name="currentPassword"
                        autoComplete="title"
                        onChange={handleChange}
                        value={password.currentPassword}
                        InputLabelProps={{
                            shrink: true
                        }}
                        placeholder="Current Passowrd"
                    />
                    <TextField
                        onBlur={handleBlur}
                        // error={errors.title ? true : false}
                        // helperText={errors.title}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="newPassword"
                        label="New Password"
                        name="newPassword1"

                        onChange={handleChange}
                        value={password.newPassword1}
                        InputLabelProps={{
                            shrink: true
                        }}
                        placeholder="New Passowrd"
                    />
                    <TextField
                        onBlur={handleBlur}
                        // error={errors.title ? true : false}
                        // helperText={errors.title}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="currentPassword"
                        label="Confirm New Password"
                        name="newPassword2"

                        onChange={handleChange}
                        value={password.newPassword2}
                        InputLabelProps={{
                            shrink: true
                        }}
                        placeholder="Confirm New Password"
                    />



                    <Grid
                        container
                        justifyContent="center"
                    >
                        <Button
                            color="primary"
                            variant="contained"
                            size="large"
                            type="submit" style={{
                                margin: "20px 0px",
                            }}
                        >
                            Confirm
                        </Button>
                    </Grid>

                </form>

            </Paper>
        </Box>

    )
}
