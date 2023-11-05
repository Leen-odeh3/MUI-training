import React, { useState } from 'react';
import { Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CreateIcon from '@mui/icons-material/Create';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import { useTheme } from '@emotion/react';

const drawerWidth = 260;

const menuItems = [
  { text: "Home", icon: <HomeIcon />, path: "/home" },
  { text: "Create", icon: <CreateIcon />, path: "/create" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  { text: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
  { text: "Log Out", icon: <ExitToAppIcon />, path: "/logout" },
];

const DrawerComponent = ({ change }) => {
  const [mode, setMode] = useState("light"); // Fixed the useState call

  const darkTheme = createTheme({
    palette: {
      mode: mode, // Removed backticks around mode
    },
  });

  const theme = useTheme();
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
      <Brightness6Icon onClick={() => change(theme.palette.mode === 'light' ? 'dark' : 'light')} 
      sx={{marginTop:"20px",marginLeft:"130px",marginBottom:"20px",cursor:"pointer"}}/>
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

export default DrawerComponent;
