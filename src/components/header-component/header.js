import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton, Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function SimpleAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        <img src={require('../../assets/image003.jpg')} height="80em" />
                    </Typography>
                    <div 
                    style={{ marginLeft: '85em' }}
                    >
                        <IconButton color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                    </div>


                </Toolbar>
            </AppBar>
        </div>
    );
}