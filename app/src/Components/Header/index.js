import React from "react";
import Avatar from '@mui/material/Avatar';
import "./style.css";
import dp from "../../assets/profile.jpeg";
import MenuIcon from '@mui/icons-material/Menu';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import useWindowSize from "../../CustomHooks/useWindowSize";
import { AppBar, Toolbar } from "@mui/material";

const Header = () => {
    const isMobile = useWindowSize();
    return <AppBar id="header">
        <Toolbar className="headerToolBar">
            <>
                {isMobile && <MenuIcon className="menuIcon" />}
                <h1>The Gram</h1>
            </>
            <ChatBubbleOutlineIcon />
        </Toolbar>
    </AppBar>
}

export default Header;