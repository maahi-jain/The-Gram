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
import { List, Toolbar } from "@mui/material";

const SideNav = () => {
    // Menu Items
    const menuItems = {
        'Home': [<HomeIcon />, "/home"],
        'Search': [<SearchOutlinedIcon />, "/search"],
        'Create': [<AddCircleRoundedIcon />, "/create"],
        'My Profile': [<PersonIcon />, "myProfile"],
        'Logout': [<LogoutIcon />, "logout"]
    }

    return (
        <Drawer variant="permanent" className="drawer">
            <Toolbar />
            <List>
                {Object.keys(menuItems).map((key) => {
                    return <ListItem key={key}>
                        <Link to={menuItems[key][1]}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {menuItems[key][0]}
                                </ListItemIcon>
                                <ListItemText primary={key} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                })}
            </List>
        </Drawer>
    )
}

export default SideNav;