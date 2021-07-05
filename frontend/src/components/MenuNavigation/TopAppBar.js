import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { bgColor } from '../../defaults';
import { useState } from 'react';
import MenuDrawer from './MenuDrawer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "24px 12px 0px 12px",
        backgroundColor: bgColor
    },
    menuButton: {
        height: 32,
        width: 32
    },
    title: {
        fontFamily: "Impact",
        letterSpacing: 2
    },
    drawer: {
        width: 250
    }
}));

const TopAppBar = () => {
    const classes = useStyles();

    const [isVisible, setVisible] = useState(false);

    const toggleDrawer = (event) => {
        event.preventDefault();
        setVisible(!isVisible);
    }

    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classes.root}>
                    <Typography variant="h3" className={classes.title} color="inherit">
                        Gym App
                    </Typography>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon className={classes.menuButton} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <MenuDrawer isVisible={isVisible} toggleDrawer={toggleDrawer}/>
            
        </>
    );
}
export default TopAppBar;