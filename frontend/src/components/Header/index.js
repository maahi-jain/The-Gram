import React from "react";
import "./style.css";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return <AppBar id="header">
        <Toolbar className="headerToolBar">
            <h1>The Gram</h1>
            <Link to="/chat">
                <ChatBubbleOutlineIcon />
            </Link>
        </Toolbar>
    </AppBar>
}

export default Header;