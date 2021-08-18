import React, { useState } from 'react'

import { Container, Grid, Paper, Button, Divider, Box, Chip, Collapse, Typography, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';


import SubTable from '../Personal/SubTable';

function createData(id, createdDate, finalTotal, status, orderItems) {
    return { id, createdDate, finalTotal, status, orderItems };
}
export default function Credential({ orderData, classes, locale }) {




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

                <h1>PLACEHOLDER</h1>

            </Paper>
        </Box>

    )
}
