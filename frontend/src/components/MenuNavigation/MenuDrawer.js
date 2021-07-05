import { Drawer, List, ListItem, ListItemText} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 250
    }
}))
const MenuDrawer = ({isVisible, toggleDrawer}) => {
    const classes = useStyles();

    const history = useHistory();

    const btnLink = (path) => () => {
        history.push(path);
    }

    return (
        <Drawer anchor="right" open={isVisible} onClose={toggleDrawer} className={classes.drawer}>
            <div className={classes.drawer}>
                <List>
                    <ListItem button onClick={btnLink("/")}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={btnLink("/track-progress")}>
                        <ListItemText primary="Track Progress" />
                    </ListItem>
                    <ListItem button onClick={btnLink("/routine-templates")}>
                        <ListItemText primary="Workout Templates" />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    )
}

export default MenuDrawer;