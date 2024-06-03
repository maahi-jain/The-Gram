import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import Post from "../Post";

const MyPost = ({ open, onClose, post }) => {

    const handleClose = () => {
        onClose(false);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <Post post={post}></Post>
            </DialogContent>
        </Dialog>
    )
}

export default MyPost;