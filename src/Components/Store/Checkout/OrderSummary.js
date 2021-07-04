import { Container, Divider, Paper } from '@material-ui/core'
import React from 'react'

export default function OrderSummary({ sum }) {

    return (
        <Container maxWidth="xs" style={{paddingBottom:"50px", paddingTop:"50px"}}>
            <Paper elevation={3} style={{padding:"30px" }}>
                <h2>結算清單</h2>
                <Divider />
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="1">小計 : </td>
                            <td colSpan="1">${sum}</td>
                        </tr>
                        <tr>
                            <td colSpan="1">運費 : </td>
                            <td colSpan="1">$50</td>
                        </tr>

                    </tbody>
                </table>
                <Divider />
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="1">總金額 : </td>
                            <td colSpan="1">${sum}</td>
                        </tr>
                    </tbody>
                </table>

            </Paper>
        </Container>
    )
}
