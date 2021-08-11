import { Container, Divider, Paper } from '@material-ui/core'
import React from 'react'
import { FormattedMessage } from 'react-intl'

export default function OrderSummary({ sum }) {

    return (
        <Container maxWidth="xs" style={{ paddingBottom: "50px", paddingTop: "50px" }}>
            <Paper elevation={3} style={{ padding: "30px" }}>
                <h2>      <FormattedMessage id="checkout.title.checkoutSummary" /></h2>
                <Divider />
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="1"> <FormattedMessage id="checkout.label.subTotal" /> : </td>
                            <td colSpan="1">${sum}</td>
                        </tr>
                        <tr>
                            <td colSpan="1"><FormattedMessage id="checkout.label.deliveryFee" /> : </td>
                            <td colSpan="1">$0</td>
                        </tr>

                    </tbody>
                </table>
                <Divider />
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="1"><FormattedMessage id="checkout.label.finalTotal" /> : </td>
                            <td colSpan="1">${sum}</td>
                        </tr>
                    </tbody>
                </table>

            </Paper>
        </Container>
    )
}
