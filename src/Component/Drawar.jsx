import React from 'react';
import { Drawer, Divider, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CreateIcon from '@mui/icons-material/Create';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 260;

const menuItems = [
  { text: "Home", icon: <HomeIcon />, path: "/home" },
  { text: "Create", icon: <CreateIcon />, path: "/create" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  { text: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
  { text: "Log Out", icon: <ExitToAppIcon />, path: "/logout" },
];

const Drawar = () => {
  const navigate = useNavigate();

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
        {menuItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Drawar;
