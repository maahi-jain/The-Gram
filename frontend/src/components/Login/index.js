import { Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./style.css"
import { AuthCtx } from "../../customHooks/useAuthentication";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
    const [userIdOrEmail, setUserIdOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const { error, login } = useContext(AuthCtx);
    const navigate = useNavigate();

    useEffect(() => {
        isLoggedIn && navigate("/home");
    }, [isLoggedIn, navigate]);

    let handleSubmit = (event) => {
        event.preventDefault();
        login(userIdOrEmail, password)
    }

    return (
        <div className="container">
            <Card id="loginForm">
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="input">
                            <TextField type="text" required label="UserId or Email" variant="outlined" onChange={(e) => setUserIdOrEmail(e.target.value)} />
                        </div>
                        <div className="input">
                            <TextField type="password" required label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <Button className="loginButton" variant="contained" type="submit">Log in</Button>
                        {error && <p className="errorMessage">{error}</p>}
                    </form>
                </CardContent>
            </Card>
            <div className="actionBox">
                <a href="/">Forgot Password?</a>
                <a href="/signup">Sign up</a>
            </div>
        </div>
    )
}

export default Login;