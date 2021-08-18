import React from 'react'
import { Container, Divider, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%"
    },
    root: {
        width: 'auto',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        width: "100%",
        borderRadius: "8px",
        padding: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        '@media (max-width: 425px)': {
            flexDirection: "column-reverse"
        }
    },
    accountCircleIcon: {
        height: "100px",
        width: "100px"
    }

}));


export default function ProfileOverview() {

    const classes = useStyles();

    return (
        <Container className={classes.container} maxWidth={false}>
            <Paper elevation={3} className={classes.paper} >



                <div >
                    <Typography variant="h4">Welcome</Typography>
                    <Typography>hkz88i00123@gmail.com</Typography>
                    <Typography>Joined on </Typography>
                    <Typography>Last logged in on</Typography>
                </div>
                <div  >
                    <AccountCircleIcon className={classes.accountCircleIcon} />
                </div>


            </Paper>
        </Container>
    )
}
