import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { bgColor } from "../../defaults";
import { SyntheticEvent, useState } from "react";
import MenuDrawer from "./MenuDrawer";

const TopAppBar = () => {
  const [isVisible, setVisible] = useState(false);

  const toggleDrawer = (event: SyntheticEvent) => {
    event.preventDefault();
    setVisible(!isVisible);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "24px 12px 0px 12px",
            bgcolor: bgColor,
          }}
        >
          <Box
            sx={{
              fontFamily: "Impact",
              letterSpacing: 2,
              color: "inherit",
              fontSize: "h3.fontSize"
            }}
          >
            Gym App
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon
              sx={{
                height: 32,
                width: 32,
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MenuDrawer isVisible={isVisible} toggleDrawer={toggleDrawer} />
    </>
  );
};
export default TopAppBar;
