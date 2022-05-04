import React, { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import TopBar from "./top-bar";
import MenuDrawer from "./menu-drawer";

const MainNav = ({ children }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMenuDrawerToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TopBar onMenuClick={handleMenuDrawerToggle} />
      <MenuDrawer
        mobileNavOpen={mobileNavOpen}
        onDrawerToggle={handleMenuDrawerToggle}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainNav;
