import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Drawar";
import ReorderIcon from "@mui/icons-material/Reorder";
import Avatar from "@mui/material/Avatar";
import Drawar from "./Drawar";

const Header = ({ change }) => {
  const drawerWidth = 260;
  const [display, setdisplay] = useState("none");
  const [type, settype] = useState("permanent");
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          marginLeft: { xs: "0px", md: `${drawerWidth}px` },
          width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar>
          <IconButton
            sx={{ marginRight: "20px", display: { xs: "block", md: "none" } }}
            onClick={() => {
              setdisplay("block");
              settype("temporary");
            }}
          >
            <ReorderIcon sx={{ color: "white" }} />
          </IconButton>
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

      <Drawar change={change} display={display} setdisplay={setdisplay} type={type} settype={settype} />
    </Box>
  );
};

export default Header;
