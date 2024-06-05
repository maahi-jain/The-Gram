import { Button, Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { updateUser } from "../Service/api.service.js";

const EditProfile = ({ open, onClose }) => {
    const user = useSelector((state) => state.user)
    const [formData, setFormData] = useState({
        profilePic: '',
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        bio: user.bio
    });

    const [errorMessage, setErrorMessage] = useState();
    const [successMessage, setSuccessMessage] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        updateUser(user._id, formData).then((res) => {
            setSuccessMessage(res.status);
            setErrorMessage(null);
            setTimeout(() => {
                onClose(false);
                setSuccessMessage(null);
            }, 2000);
        }).catch((err) => {
            setErrorMessage(err.message);
            setSuccessMessage(null);
        });
    }

    const handleInputChange = (event) => {
        const { name, value, files } = event.target;
        if (files?.length > 0) {
            setFormData({
                ...formData,
                profilePic: files[0]
            })
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }
    }

    return (
        <Dialog open={open} onClose={() => onClose(false)}>
            <DialogTitle>Create Post</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <TextField type="file" name="profilePic" label="Profile picture" value={formData.profilePic} onChange={handleInputChange} focused variant="outlined" />
                    </div>
                    <div className="input">
                        <TextField type="text" name="name" label="Name" onChange={handleInputChange} value={formData.name} variant="outlined" />
                    </div>
                    <div className="input">
                        <TextField type="text" name="bio" label="Bio" onChange={handleInputChange} value={formData.bio} variant="outlined" />
                    </div>
                    <div className="input">
                        <TextField type="text" name="phoneNumber" label="Mobile No." onChange={handleInputChange} value={formData.phoneNumber} variant="outlined" />
                    </div>
                    <div className="input">
                        <TextField type="email" name="email" label="Email" onChange={handleInputChange} value={formData.email} variant="outlined" />
                    </div>
                    <div>
                        <Button type="submit" variant="contained">Update</Button>
                    </div>
                </form>
                {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                {successMessage && <p className="successMessage">{successMessage}</p>}
            </DialogContent>
        </Dialog>
    )
}

export default EditProfile;