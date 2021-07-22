import { Box, Button, Divider, Paper } from '@material-ui/core'
import React from 'react'
import { FormattedMessage } from 'react-intl';

export default function PersonalInfo({ user }) {

    console.log(user);
    return (
        <Box style={{ display: "flex", flexDirection: "column", width: '100%' }} className="profile_personalInfo">
            <h2 style={{ alignSelf: "flex-start" }}><FormattedMessage id="profile.personalInformation.heading" /></h2>
            <Paper elevation={8} style={{ padding: "30px", width: '100%' }}  >
                <table style={{ width: "100%" }} rules="none">
                    <tbody>
                        <tr>
                            <td > <FormattedMessage id="profile.firstName.label" /> : </td>
                            <td  ><FormattedMessage id="profile.unset" /></td>
                        </tr>
                        <tr  >
                            <td > <FormattedMessage id="profile.lastName.label" /> : </td>
                            <td ><FormattedMessage id="profile.unset" /></td>
                        </tr>
                        <tr>
                            <td > <FormattedMessage id="profile.email.label" /> : </td>
                            <td >{user.email}</td>
                        </tr>
                        <tr>
                            <td > <FormattedMessage id="profile.address.label" /> : </td>
                            <td ><FormattedMessage id="profile.unset" /></td>
                        </tr>
                        <tr>
                            <td > <FormattedMessage id="profile.phone.label" /> : </td>
                            <td ><FormattedMessage id="profile.unset" /></td>
                        </tr>
                    </tbody>
                </table>
                <Button style={{ margin: "10px" }} color="primary" variant="contained">
                    <FormattedMessage id="profile.editProfile" />
                </Button>
            </Paper>
        </Box>

    )
}
