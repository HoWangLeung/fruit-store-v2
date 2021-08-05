import React, { useState } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Box, Collapse, Typography, IconButton, Chip } from '@material-ui/core'
import { PDFDownloadLink } from '@react-pdf/renderer';
import OrderPDF from './OrderHistory/OrderPDF';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload as download } from "@fortawesome/free-solid-svg-icons"
import { FormattedMessage } from 'react-intl';
export default function SubTable({ rows, row, locale }) {


    const [openOrderDetail, setOpenOrderDetail] = useState(false)

    return (
        <>
            <TableRow key={row.id}>

                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="center">{row.createdDate}</TableCell>
                <TableCell align="center">
                    <Chip label={row.status === "PAID" ? "已付款" : null} style={{ backgroundColor: "#01BFA6", color: "white" }} />

                </TableCell>
                <TableCell align="center">$ {row.finalTotal}</TableCell>
                <TableCell align="center">
                    <PDFDownloadLink document={<OrderPDF rows={rows} />} fileName="somename.pdf">
                        {({ blob, url, loading, error }) => (<FontAwesomeIcon
                            style={{ cursor: "pointer" }}
                            icon={download} />)}
                    </PDFDownloadLink>
                </TableCell>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpenOrderDetail(!openOrderDetail)}>
                        {openOrderDetail ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={openOrderDetail} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                <FormattedMessage id="profile.history.detail.header.main" />
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><FormattedMessage id="profile.history.detail.header.item" /></TableCell>
                                        <TableCell><FormattedMessage id="profile.history.detail.header.price" /></TableCell>
                                        <TableCell align="right"><FormattedMessage id="profile.history.detail.header.quantity" /></TableCell>
                                        <TableCell align="right"><FormattedMessage id="profile.history.detail.header.total" /></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.orderItems.map((r) => (
                                        <TableRow  >
                                            <TableCell component="th" scope="row">
                                                {r.product.localizations[`${locale}`].name}
                                            </TableCell>
                                            <TableCell>{r.price}</TableCell>
                                            <TableCell align="right">  {r.quantity}</TableCell>
                                            <TableCell align="right">
                                                {r.price * r.quantity}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );


}
   // <TableRow  >
                                                                    //     <TableCell component="th" scope="row">
                                                                    //         {r.product.localizations[`${locale}`].name}
                                                                    //     </TableCell>
                                                                    //     <TableCell>{r.price}</TableCell>
                                                                    //     <TableCell align="right">  {r.quantity}</TableCell>
                                                                    //     <TableCell align="right">
                                                                    //         {r.price * r.quantity}
                                                                    //     </TableCell>
                                                                    // </TableRow>