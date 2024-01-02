import React from "react";
import Avatar from '@mui/material/Avatar';
import "./style.css";
import dp from "../../assets/profile.jpeg";

const Header = () => {
    return <div className="header">
        <Avatar src={dp} alt="profile-pic" />
        <h1>The Gram</h1>
    </div>
}

export default Header;