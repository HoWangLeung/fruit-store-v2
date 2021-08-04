import React, { useState } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Container, Grid, Paper, Button, Divider, Box, Chip, Collapse, Typography, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as NoDataSvg } from '../../Images/noData.svg'

import { FormattedMessage } from 'react-intl';


import SubTable from './SubTable';

function createData(id, createdDate, finalTotal, status, orderItems) {
    return { id, createdDate, finalTotal, status, orderItems };
}
export default function OrderHistory({ orderData, classes, locale }) {


    let rows = orderData.map(({ refId, createdDate, status, finalTotal, orderItems }) => {
        let row = createData(refId, createdDate, finalTotal, status, orderItems)
        return row
    })

    return (


        <Box style={{ display: "flex", flexDirection: "column", width: '100%' }}>
            <h2><FormattedMessage id="profile.history.heading" /></h2>
            <Paper elevation={8} style={{ padding: "30px", width: '100%' }} >


                <TableContainer component={Paper} style={{ marginTop: '25px' }}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                <TableCell><FormattedMessage id="profile.history.orderReference" />  #</TableCell>
                                <TableCell align="center"><FormattedMessage id="profile.history.createdDate" /> </TableCell>
                                <TableCell align="center"><FormattedMessage id="profile.history.status" /> </TableCell>
                                <TableCell align="center"><FormattedMessage id="profile.history.finalTotal" /> </TableCell>
                                <TableCell align="center"><FormattedMessage id="profile.history.download" /> </TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        {rows.length > 0 ? <TableBody>
                            {rows.map((row, i) => {
                                console.log(row);
                                return (

                                    <SubTable key={row.id} rows={rows} row={row} locale={locale} />

                                )
                            }


                            )}
                        </TableBody> :
                            <TableBody>
                                <TableRow >
                                    <TableCell align="center" colSpan={6}>

                                        <div>
                                            <NoDataSvg style={{ height: "100px", width: "100px" }} />
                                            <p style={{ fontFamily: "Noto Sans TC", fontWeight: "600", color: "#E8D4BF" }} >
                                                <FormattedMessage id="common.noData" />
                                            </p>
                                        </div>

                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        }
                    </Table>
                </TableContainer>
                {/* <OrderPDF /> */}
            </Paper>
        </Box>

    )
}
