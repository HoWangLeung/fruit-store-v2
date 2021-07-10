import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Container, Grid, Paper, Button, Divider, Box, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

export default function OrderHistory({ rows, classes, data }) {
    
    return (


        <Box style={{ display: "flex", flexDirection: "column", width: '100%' }}>
            <h2>購買紀錄</h2>
            <Paper elevation={8} style={{ padding: "30px", width: '100%' }} >


                <TableContainer component={Paper} style={{ marginTop: '25px' }}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>訂單編號 #</TableCell>
                                <TableCell align="center">建立日期</TableCell>
                                <TableCell align="center">狀態</TableCell>
                                <TableCell align="center">金額</TableCell>
                                <TableCell align="center">下載</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows && rows.map((row, i) => {
                                console.log(row);
                                return (
                                    <TableRow key={i}>
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="center">{row.createdDate}</TableCell>
                                        <TableCell align="center">
                                            <Chip label={row.status==="PAID" ?"已付款" :null}  style={{backgroundColor:"#4BB543",color:"white"}}/>

                                        </TableCell>
                                        <TableCell align="center">$ {row.finalTotal}</TableCell>
                                        <TableCell align="center">Download</TableCell>

                                    </TableRow>
                                )
                            }


                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>

    )
}
