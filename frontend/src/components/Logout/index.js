import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React, { useContext } from "react"
import { AuthCtx } from "../../customHooks/useAuthentication";
import { useNavigate } from "react-router-dom";

const Logout = ({ open, onClose }) => {
    const { logout } = useContext(AuthCtx);
    const navigate = useNavigate();

    const handleYes = async () => {
        await logout();
        navigate("/");
        onClose(false);
    }

    const handleClose = () => {
        onClose(false);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Logout</DialogTitle>
            <DialogContent>Do you want to logout?</DialogContent>
            <DialogActions>
                <Button onClick={handleYes}>Yes</Button>
                <Button onClick={handleClose}>No</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Logout;