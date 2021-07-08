import React, { useEffect, useRef, useState } from 'react'
import { Container, Grid, Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './Profile.scss'
import useProfileData from './useProfileData';
import OrderHistory from './OrderHistory';
import PersonalInfo from './PersonalInfo';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
}, {index: 1});

function createData(id, createdDate, finalTotal, status, protein) {
    return { id, createdDate, finalTotal, status, protein };
}
export default function Profile() {
    const classes = useStyles();
    let data = useProfileData()
    if(data.length===0) return null


    let rows = data.map(({ refId, createdDate, status, finalTotal }) => {
        let row = createData(refId, createdDate, finalTotal, status, 4.0)
        return row
    })
   
    let user = data[0].user

    return (
        <Container maxWidth="md"   >
            <Grid container
                   direction="row"
                style={{ height: "100vh", }}
                justify="center"
                alignItems="center"
            >

                <Grid container item
                    justify="center"
                    alignItems="center">
                    <PersonalInfo user={user} />
                </Grid>
                <Grid container item
                    justify="center"
                    alignItems="center">

                    <OrderHistory
                        classes={classes}
                        rows={rows} />

                </Grid>
            </Grid>
        </Container>
    )
}
