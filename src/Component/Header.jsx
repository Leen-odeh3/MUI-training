import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

import { Drawer, Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  const drawerWidth = 260;

  return (
    <Box>
      <AppBar position="static" sx={{marginLeft:`${drawerWidth}px`}}  >
        <Toolbar>
          <Typography sx={{flexGrow:"1"}}>My Expenses</Typography>
          <Typography variant="h5">Leen</Typography>
          <Avatar sx={{ bgcolor: "gray",marginLeft:"10px" }} variant="rounded">L</Avatar>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
      </Drawer>
    </Box>
  );
};

export default Header;
