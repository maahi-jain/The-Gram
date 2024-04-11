import { Button, Card, CardContent, CardHeader, TextField } from "@mui/material";
import React, { useState } from "react";
import "./style.css";
import { singUp } from "../Service/api.service";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/action";

const Signup = () => {

    const [formData, setFormData] = useState({
        profilePic: '',
        phoneNumber: '',
        name: '',
        userId: '',
        email: '',
        password: ''
    });
    const dispatch = useDispatch();
    const [error, setError] = useState();

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        singUp(formData).then((res) => {
            let action = setUser(res.user);
            dispatch(action);
            navigate("/home");
        }).catch((error) => {
            setError(error.message);
        });

    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div className="container">
            <h2>
                Welcome to the Gram !
            </h2>
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="input">
                            <TextField type="meida" name="profilePic" onChange={handleInputChange} label="Profile picture" variant="outlined" />
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