import React from 'react'
import { Drawer, Divider,Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CreateIcon from '@mui/icons-material/Create';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const Drawar = () => {
    const navigate=useNavigate();
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

<List>
    <ListItem>
        <ListItemButton onClick={()=>navigate("/home")}>
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText>Home</ListItemText>
        </ListItemButton>
        </ListItem>
        <ListItem>
        <ListItemButton onClick={()=>navigate("/create")}>
            <ListItemIcon><CreateIcon/>   </ListItemIcon>
            <ListItemText>Create</ListItemText>
        </ListItemButton>
        </ListItem>
        <ListItem>
        <ListItemButton onClick={()=>navigate("/settings")}>
            <ListItemIcon> <SettingsIcon/>  </ListItemIcon>
            <ListItemText>Settings</ListItemText>
        </ListItemButton>
        </ListItem>
        <ListItem>
        <ListItemButton onClick={()=>navigate("/profile")}>
            <ListItemIcon> <AccountCircleIcon/> </ListItemIcon>
            <ListItemText>Profile</ListItemText>
        </ListItemButton>
    </ListItem>
    <ListItem>
        <ListItemButton onClick={()=>navigate("/logout")}>
            <ListItemIcon> <ExitToAppIcon/> </ListItemIcon>
            <ListItemText>Log Out</ListItemText>
        </ListItemButton>
    </ListItem>
</List>

  </Drawer>
  )
}

export default Drawar
