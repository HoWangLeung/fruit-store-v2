import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Fade, Grid, Modal, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { FormattedMessage } from 'react-intl';
import EditProfileForm from './EditProfileForm';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function PersonalInfo({ user,
    handleSubmit,
    handleEditProfile,
    open,
    handleClose,
    handleProfileChange,
    profile,
    setProfile,
    openFeedBack,
    isLoadingprofile

}) {
    return (
        <Box style={{ display: "flex", flexDirection: "column", width: '100%' }} className="profile_personalInfo">
            <Grid container
                direction="column"
                justify="flex-start"
                alignItems="flex-start" >
                <Typography noWrap variant="h5" style={{ alignSelf: "flex-start" }}><FormattedMessage id="profile.personalInformation.heading" /></Typography>
                <Typography noWrap style={{ color: "#2E3C42", opacity: ".6", marginTop: "5px", marginBottom: "15px" }} >Your personal information</Typography>

            </Grid>

            <Paper elevation={8} style={{ padding: "30px", width: '100%', borderRadius: "8px" }}  >
                <table style={{ width: "100%" }} rules="none">
                    <tbody>
                        <tr>
                            <td > <FormattedMessage id="profile.firstName.label" /> : </td>
                            <td  >
                                {/* <FormattedMessage id="profile.unset" /> */}
                                {user.firstName ? user.firstName : "unset"}
                            </td>
                        </tr>

                        <tr  >
                            <td > <FormattedMessage id="profile.lastName.label" /> : </td>
                            <td >
                                {user.lastName ? user.lastName : "unset"}

                            </td>
                        </tr>
                        <tr>
                            <td > <FormattedMessage id="profile.email.label" /> : </td>
                            <td >{user.email ? user.email : "unset"}</td>
                        </tr>
                        <tr>
                            <td > <FormattedMessage id="profile.address.label" /> : </td>
                            <td >{user.address ? user.address : "unset"}</td>
                        </tr>
                        <tr>
                            <td > <FormattedMessage id="profile.phone.label" /> : </td>
                            <td >{user.phone ? user.phone : "unset"}</td>
                            {/* <td ><FormattedMessage id="profile.unset" /></td> */}
                        </tr>
                    </tbody>
                </table>

                <Button
                    onClick={handleEditProfile}
                    style={{ margin: "10px" }} color="primary" variant="contained">
                    <FormattedMessage id="profile.editProfile" />
                </Button>

                <Modal
                   // onBackdropClick="false"
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',

                    }}
                    closeAfterTransition
                >

                    <>
                        <EditProfileForm
                            handleClose={handleClose}
                            open={open}
                            handleSubmit={handleSubmit}
                            user={user}
                            handleProfileChange={handleProfileChange}
                            profile={profile}
                            setProfile={setProfile}
                            isLoadingprofile={isLoadingprofile}
                        />
                    </>

                </Modal>

                <Dialog
                   // onBackdropClick={false}
                    open={openFeedBack}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        <Grid container justifyContent="center" alignItems="center"   >
                          
                            {"Information"}
                        </Grid>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Your information has been successfully updated.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </Paper>
        </Box>

    )
}
