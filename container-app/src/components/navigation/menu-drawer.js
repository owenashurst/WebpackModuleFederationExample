import React from "react";
import {
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const MenuDrawer = ({ mobileNavOpen, onDrawerToggle }) => {
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const drawerWidth = 240;

  const menu = (
    <>
      <Toolbar />
      <List>
        <ListItem button component={RouterLink} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={RouterLink} to="/contact-us">
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </>
  );

  if (largeScreen) {
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {menu}
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="temporary"
      open={mobileNavOpen}
      onClose={onDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
    >
      {menu}
    </Drawer>
  );
};

export default MenuDrawer;
