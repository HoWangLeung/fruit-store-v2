import { Grid, Button, Container, Fade, Paper, TextField, CssBaseline } from '@material-ui/core'
import React from 'react'

export default function EditProfileForm({ open, handleSubmit, user, handleProfileChange, profile,handleClose }) {
    return (
        <Fade in={open}>
            <Container maxWidth="xs">

                <Paper elevation={3} style={{ padding: "20px 20px" }}  >
                    <span style={{ fontWeight: "600" }}>Edit Personal Information</span>
                    <Grid
                        container
                        direction="column"
                        alignItems="flex-end"
                        justifycontent="center"
                    >

                        <form onSubmit={handleSubmit} id="editProfile">

                            <TextField
                                fullWidth
                                label="First Name"
                                name="firstName"
                                variant="outlined"
                                margin="normal"
                                value={profile.firstName}
                                onChange={handleProfileChange}
                            />

                            <TextField
                                fullWidth
                                label="Last Name"
                                name="lastName"
                                variant="outlined"
                                margin="normal"
                                value={profile.lastName}
                                onChange={handleProfileChange}
                            // error={errors.password ? true : false}
                            // helperText={errors.password}
                            // onBlur={handleBlur}
                            />

                            <TextField
                                fullWidth
                                label="Address"
                                name="address"
                                variant="outlined"
                                margin="normal"
                                value={profile.address}
                                onChange={handleProfileChange}
                            // error={errors.password ? true : false}
                            // helperText={errors.password}
                            // onBlur={handleBlur}
                            />
                            <TextField
                                fullWidth
                                label="Phone"
                                name="phone"
                                variant="outlined"
                                margin="normal"
                                value={profile.phone}
                                onChange={handleProfileChange}
                            // error={errors.password ? true : false}
                            // helperText={errors.password}
                            // onBlur={handleBlur}
                            />


                        </form>
                        <div style={{marginTop:"8px"}}>
                            <Button
                                onClick={handleClose}
                                variant="contained"
                                color="secondary"
                                style={{marginRight:"15px"}}
                            >
                                Cancel
                            </Button>

                            <Button
                                form="editProfile"
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Confirm
                            </Button>
                        </div>
                    </Grid>
                </Paper>
            </Container>
        </Fade>
    )
}
