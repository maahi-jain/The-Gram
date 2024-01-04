import React from "react";
import "./style.css";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { AppBar, Toolbar } from "@mui/material";

const Header = () => {
    return <AppBar id="header">
        <Toolbar className="headerToolBar">
            <>
                <h1>The Gram</h1>
            </>
            <ChatBubbleOutlineIcon />
        </Toolbar>
    </AppBar>
}

export default Header;