import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Container, Grid, Paper, Button, Divider, Box, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as NoDataSvg } from '../../Images/noData.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload as download } from "@fortawesome/free-solid-svg-icons"
function createData(id, createdDate, finalTotal, status, protein) {
    return { id, createdDate, finalTotal, status, protein };
}
export default function OrderHistory({ orderData, classes }) {
    console.log(orderData);
    let rows = orderData.map(({ refId, createdDate, status, finalTotal }) => {
        let row = createData(refId, createdDate, finalTotal, status, 4.0)
        return row
    })

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
                        {rows.length > 0 ? <TableBody>
                            {rows.map((row, i) => {
                                console.log(row);
                                return (
                                    <TableRow key={i}>
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="center">{row.createdDate}</TableCell>
                                        <TableCell align="center">
                                            <Chip label={row.status === "PAID" ? "已付款" : null} style={{ backgroundColor: "#01BFA6", color: "white" }} />

                                        </TableCell>
                                        <TableCell align="center">$ {row.finalTotal}</TableCell>
                                        <TableCell align="center">
                                            <FontAwesomeIcon 
                                            style={{cursor:"pointer"}}
                                            icon={download} />
                                        </TableCell>

                                    </TableRow>
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
                                                No Data
                                            </p>
                                        </div>

                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        }
                    </Table>
                </TableContainer>
            </Paper>
        </Box>

    )
}
