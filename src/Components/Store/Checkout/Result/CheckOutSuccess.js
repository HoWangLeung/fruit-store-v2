import { Container, Grid, Paper, Button } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import Divider from '@material-ui/core/Divider';
import gsap from 'gsap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function CheckOutSuccess() {
    let path = useRef()
    let data = JSON.parse(localStorage.getItem("paymentInfo"))



    return (
        <Container maxWidth="md" >

            <Grid container
                style={{ height: "100vh", }}
                justify="center"
                alignItems="center"
            >

                <Grid container item
                    direction="column"
                    justify="center"
                    alignItems="center">

                    <svg
                        style={{
                            height: "100px",
                            width: "100px"
                        }}
                        aria-hidden="true" focusable="false"

                        data-prefix="fas"
                        data-icon="check-circle"
                        className="svg-inline--fa fa-check-circle fa-w-16" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            stroke="#4BB543"
                            strokeWidth="5"
                            fill="#4BB543"
                            ref={path}
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                    </svg>
                    <Grid container item
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <h1>付款成功</h1>
                        <p>感謝你的支持 !<br />
                           </p>
                    </Grid>

                    <Divider style={{ width: '50%' }} />
                    <h1>訂單資料</h1>
                    <Grid container item
                        direction="column"
                        justify="center"
                        alignItems="center">

                        <table>
                            <tbody>
                                <tr>
                                    <td style={{ whiteSpace: "nowrap" }} colSpan="1">訂單編號 : </td>
                                    <td colSpan="1">{data.id}</td>
                                </tr>
                                <tr>
                                    <td colSpan="1">持卡人 : </td>
                                    <td colSpan="1">{data.source.name}</td>
                                </tr>
                                <tr>
                                    <td colSpan="1">信用卡 : </td>
                                    <td colSpan="1">{data.source.brand}</td>
                                </tr>
                                <tr>
                                    <td colSpan="1">最後4碼 : </td>
                                    <td colSpan="1">{data.source.last4}</td>
                                </tr>
                                <tr>
                                    <td colSpan="1">金額 : </td>
                                    <td colSpan="1">$ {data.amount/100}</td>
                                </tr>
                                <tr>
                                    <td colSpan="1">貨幣 : </td>
                                    <td colSpan="1">{data.currency}</td>
                                </tr>
                                <tr>
                                    <td colSpan="1">建立日期 : </td>
                                    <td colSpan="1">{data.created}</td>
                                </tr>
                            </tbody>
                        </table>

                        <Link to="/">
                            <Button style={{ marginTop: "15px", marginBottom: "5px" }} color="primary" variant="contained">
                                回到主頁
                            </Button>
                        </Link>
                    </Grid>


                </Grid>

            </Grid>

        </Container>
    )
}
