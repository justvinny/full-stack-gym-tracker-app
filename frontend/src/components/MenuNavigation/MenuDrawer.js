import { Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import { useHistory } from "react-router";

const MenuDrawer = ({ isVisible, toggleDrawer }) => {
  const history = useHistory();

  const btnLink = (path) => () => {
    history.push(path);
  };

  return (
    <Drawer
      anchor="right"
      open={isVisible}
      onClose={toggleDrawer}
      sx={{ width: 250 }}
    >
      <Box sx={{ width: 250 }}>
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
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;
