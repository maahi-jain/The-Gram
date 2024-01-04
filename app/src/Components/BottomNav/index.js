import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import "./style.css"

import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const BottomNav = () => {
    return (
        <BottomNavigation className="bottomNav"
        //   showLabels
        //   value={value}
        //   onChange={(event, newValue) => {
        //     setValue(newValue);
        //   }}
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Search" icon={<SearchOutlinedIcon />} />
            <BottomNavigationAction label="Create" icon={<AddCircleRoundedIcon />} />
            <BottomNavigationAction label="My Profile" icon={<PersonIcon />} />
            <BottomNavigationAction label="Logout" icon={<LogoutIcon />} />
        </BottomNavigation>
    )
}

export default BottomNav;