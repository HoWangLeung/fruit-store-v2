import React from 'react'
import { Button, CircularProgress, Dialog, DialogContentText, Grid, Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
export default function CommonDialog({ dialog, setDialog }) {

console.log(dialog);

    return (
        <Dialog
            open={dialog.open}
            onClose={() => setDialog(state => ({ ...state, open: false }))}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="xs"
        >
            <DialogTitle id="alert-dialog-title">
                <Grid container alignItems="center" justifyContent="center">
                    
                    {dialog.type==="success" ? <CheckCircleIcon style={{ marginRight: "8px", fill: "#01BFA6" }} /> :<ErrorIcon style={{ fill: '#ff7961', fontSize: "200%", marginRight: "10px" }} />}

                    <Typography variant="span" align="center">
                        
                        {dialog.type==="success" ? "Success":"Error Message"}
                        
                        </Typography>
                </Grid>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" style={{ alignSelf: "center" }} >
                    <Typography align="center">{dialog.message}</Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setDialog(state => ({ ...state, open: false }))} autoFocus>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    )
}
