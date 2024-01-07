import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React from "react"

const Logout = ({ open, onClose }) => {

    const handleClose = () => {
        onClose(false);
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Logout</DialogTitle>
            <DialogContent>Do you want to logout?</DialogContent>
            <DialogActions>
                <Button>Yes</Button>
                <Button>No</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Logout;