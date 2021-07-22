import { Divider, Grid } from '@material-ui/core'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import './Footer.scss'
export default function Footer() {
    return (

        <Grid
            direction="row"
            justify="space-evenly"
            alignItems="center"
            container item
            className="Footer"
            xs={12}

        >

            <Grid item  >
                <h1><FormattedMessage id="footer.contactUs" /> </h1>
            </Grid>
            <Grid item  >
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="1"><FormattedMessage id="footer.address.label" /> : </td>
                            <td colSpan="1"><FormattedMessage id="footer.address.value" /></td>
                        </tr>
                        <tr>
                            <td colSpan="1"><FormattedMessage id="footer.phone.label" /> : </td>
                            <td colSpan="1">9259 1883</td>
                        </tr>
                        <tr>
                            <td colSpan="1"><FormattedMessage id="footer.contact.label" /> : </td>
                            <td colSpan="1"><FormattedMessage id="footer.contact.value" /></td>
                        </tr>
                    </tbody>
                </table>
            </Grid>
        </Grid>

    )
}
