import React, { useEffect, useState } from "react";
import useWindowSize from "../../CustomHooks/useWindowSize";
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
    const isMobile = useWindowSize();
    const [variant, setVariant] = useState(isMobile ? 'temporary' : 'permanent');

    // Menu Items
    const menuItems = {
        'Home': <HomeIcon />,
        'Search': <SearchOutlinedIcon />,
        'Create': <AddCircleRoundedIcon />,
        'My Profile': <PersonIcon />,
        'Logout': <LogoutIcon />
    }

    // Handle resize
    useEffect(() => {
        setVariant(isMobile ? 'temporary' : 'permanent')
    }, [isMobile])

    return (
        <Drawer variant={variant} className="drawer">
            <Toolbar />
            <List>
                {Object.keys(menuItems).map((key) => {
                    return <ListItem key={key}>
                        <ListItemButton>
                            <ListItemIcon>
                                {menuItems[key]}
                            </ListItemIcon>
                            <ListItemText primary={key} />
                        </ListItemButton>
                    </ListItem>
                })}
            </List>
        </Drawer>
    )
}

export default SideNav;