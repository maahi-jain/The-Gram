import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import "./style.css"

import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

const BottomNav = () => {

    const [value, setValue] = useState('Home');

    const handleChange = (event, value) => {
        setValue(value);
    }

    const menuItems = {
        'Home': [<HomeIcon />, "/home"],
        'Search': [<SearchOutlinedIcon />, "/search"],
        'Create': [<AddCircleRoundedIcon />, "/create"],
        'My Profile': [<PersonIcon />, "myProfile"],
        'Logout': [<LogoutIcon />, "logout"]
    }

    return (
        <BottomNavigation className="bottomNav"
            value={value}
            onChange={handleChange}
        >
            {Object.keys(menuItems).map((key) => {
                return (
                    <BottomNavigationAction label={key} value={key} key={key} icon={menuItems[key][0]} component={Link} to={menuItems[key][1]} />
                )
            })}
        </BottomNavigation>
    )
}

export default BottomNav;