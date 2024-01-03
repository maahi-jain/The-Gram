import React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import "./style.css";
import dp from "../../assets/profile.jpeg";
import MenuIcon from '@mui/icons-material/Menu';
import useWindowSize from "../CustomHooks/useWindowSize";

const Header = () => {
    const isMobile = useWindowSize();
    return <div className="header">
        {isMobile && <MenuIcon className="menuIcon" />}
        <Avatar src={dp} alt="profile-pic" />
        <h1>The Gram</h1>
    </div>
}

export default Header;