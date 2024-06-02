import { Button, Card, CardContent, TextField } from "@mui/material";
import React, { useState } from "react";
import "./style.css";
import { signUp } from "../Service/api.service";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [formData, setFormData] = useState({
        profilePic: '',
        phoneNumber: '',
        name: '',
        userId: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState();

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        signUp(formData).then((res) => {
            navigate("/");
        }).catch((error) => {
            setError(error.message);
        });

    }

    const handleInputChange = (event) => {
        const { name, value, files } = event.target;
        if (name === 'profilePic' && files.length > 0) {
            const file = files[0];
            setFormData({
                ...formData,
                profilePic: file
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }
    }

    return (
        <div className="container">
            <h2>
                Welcome to the Gram !
            </h2>
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit} enctype="multipart/form-data">
                        <div className="input">
                            <TextField type="file" name="profilePic" onChange={handleInputChange} label="Profile picture" variant="outlined" focused />
                        </div>
                        <div className="input">
                            <TextField type="text" name="phoneNumber" onChange={handleInputChange} required label="Mobile Number" variant="outlined" />
                        </div>
                        <div className="input">
                            <TextField type="text" name="name" onChange={handleInputChange} required label="Full Name" variant="outlined" />
                        </div>
                        <div className="input">
                            <TextField type="text" name="userId" onChange={handleInputChange} required label="userId" variant="outlined" />
                        </div>
                        <div className="input">
                            <TextField type="email" name="email" onChange={handleInputChange} required label="Email" variant="outlined" />
                        </div>
                        <div className="input">
                            <TextField type="password" name="password" onChange={handleInputChange} required label="Password" variant="outlined" />
                        </div>
                        <div>
                            <Button variant="contained" type="submit">Submit</Button>
                        </div>
                        {error && <p className="errorMessage">{error}</p>}
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Signup;