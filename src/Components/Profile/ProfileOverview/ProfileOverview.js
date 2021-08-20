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
    },
    profileText: {
        margin: "8px 0px",
        color:"#646e73",
        fontFamily:"Segoe UI"
    }

}));


export default function ProfileOverview({ user }) {

    const classes = useStyles();

    return (
        <Container className={classes.container} maxWidth={false}>
            <Paper elevation={3} className={classes.paper} >



                <div >
                    <Typography  variant="h4">Welcome</Typography>
                    <Typography className={classes.profileText}>{user.email}</Typography>
                    <Typography className={classes.profileText}>Joined on {user.createdDate}</Typography>
                    <Typography className={classes.profileText}>Last logged in on {user.lastLoginDate} </Typography>
                </div>
                <div  >
                    <AccountCircleIcon className={classes.accountCircleIcon} />
                </div>


            </Paper>
        </Container>
    )
}
