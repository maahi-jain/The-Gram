import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";

import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Divider, List, Toolbar } from "@mui/material";

import "./style.css";

const SideNav = ({ onLogout, onCreatePost }) => {
    // Menu Items
    const menuItems = {
        'Home': [<HomeIcon />, "/home"],
        'Search': [<SearchOutlinedIcon />, "/search"],
        'My Profile': [<PersonIcon />, "/profile"],
    }

    return (
        <Drawer variant="permanent" className="drawer">
            <Toolbar />
            <List>
                {Object.keys(menuItems).map((key) => {
                    return <div key={key}>
                        <ListItem key={key}>
                            <Link to={menuItems[key][1]} className="navLink">
                                <ListItemButton>
                                    <ListItemIcon>
                                        {menuItems[key][0]}
                                    </ListItemIcon>
                                    <ListItemText primary={key} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <Divider />
                    </div>
                })}
                <ListItem>
                    <ListItemButton onClick={() => onCreatePost(true)}>
                        <ListItemIcon>
                            <AddCircleRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Create" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemButton onClick={() => onLogout(true)}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SideNav;