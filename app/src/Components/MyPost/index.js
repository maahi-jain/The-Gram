import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import Post from "../Post";
import "./style.css";

const MyPost = ({ open, onClose, post }) => {

    const handleClose = () => {
        onClose(false);
    }

    return (
        <Dialog className="myPostDialog" open={open} onClose={handleClose}>
            <DialogContent className="myPostContent">
                <Post post={post}></Post>
            </DialogContent>
        </Dialog>
    )
}

export default MyPost;