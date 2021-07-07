import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Container, Grid, Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

export default function OrderHistory({rows,classes}) {
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>訂單編號</TableCell>
                        <TableCell align="right">創立日期</TableCell>
                        <TableCell align="right">狀態</TableCell>
                        <TableCell align="right">金額</TableCell>
                        <TableCell align="right">下載</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => {
                        console.log(row);
                        return (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.createdDate}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">$ {row.finalTotal}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>

                            </TableRow>
                        )
                    }


                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
