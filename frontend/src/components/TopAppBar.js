import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "24px 12px 0px 12px",
        backgroundColor: "#1e1f22"
    },
    menuButton: {
        height: 32,
        width: 32
    },
    title: {
        fontFamily: "Impact",
        letterSpacing: 2
    },
}));

const TopAppBar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.root}>
                <Typography variant="h4" className={classes.title} color="inherit">
                    Gym App
                </Typography>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon className={classes.menuButton} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
export default TopAppBar;