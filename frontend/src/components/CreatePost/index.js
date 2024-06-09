import { Button, Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../Service/api.service.js";

const CreatePost = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        content: '',
        caption: ''
    });
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState();
    const [successMessage, setSuccessMessage] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        createPost(formData).then((res) => {
            setSuccessMessage(res.message);
            setErrorMessage(null);
            setTimeout(() => {
                onClose(false);
                navigate("/");
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
                content: files[0]
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
                        <TextField type="file" name="content" onChange={handleInputChange} variant="outlined" />
                    </div>
                    <div className="input">
                        <TextField type="text" name="caption" label="caption" onChange={handleInputChange} variant="outlined" />
                    </div>
                    <div>
                        <Button type="submit" variant="contained">Create</Button>
                    </div>
                </form>
                {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                {successMessage && <p className="successMessage">{successMessage}</p>}
            </DialogContent>
        </Dialog>
    )
}

export default CreatePost;