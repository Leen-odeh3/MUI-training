import React from 'react'
import { Drawer, Divider,Toolbar } from "@mui/material";


const Drawar = () => {
    const drawerWidth = 260;

  return (
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
  )
}

export default Drawar
