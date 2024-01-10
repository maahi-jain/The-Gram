import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React from "react"

const CreatePost = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={() => onClose(false)}>
            <DialogTitle>Create Post</DialogTitle>
            <DialogContent>
                <input type="file" />
            </DialogContent>
            <DialogActions>
                <Button>Upload</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreatePost;