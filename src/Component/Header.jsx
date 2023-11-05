import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import './Drawar'
import Avatar from "@mui/material/Avatar";
import Drawar from "./Drawar";

const Header = ({change}) => {
  const drawerWidth = 260;

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          marginLeft: `${drawerWidth}px`,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar>
          <Typography sx={{ flexGrow: "1" }}>My Expenses</Typography>
          <Typography variant="h5">Leen</Typography>
          <Avatar
            sx={{ bgcolor: "gray", marginLeft: "10px" }}
            variant="rounded"
          >
            L
          </Avatar>
        </Toolbar>
      </AppBar>

   <Drawar change={change}/>
    </Box>
  );
};

export default Header;
