import { Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./style.css"
import useAuthentication from "../../CustomHooks/useAuthentication";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { AuthCtx } = useAuthentication();
    const { user, error, login } = useContext(AuthCtx);
    const navigate = useNavigate();

    useEffect(() => {
        user && navigate("/home");
    }, [user, navigate]);

    return (
        <div className="container">
            <Card id="loginForm">
                <CardContent>
                    <form onSubmit={() => login(email, password)}>
                        <div className="input">
                            <TextField type="email" required label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input">
                            <TextField type="password" required label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <Button className="loginButton" variant="contained" type="submit">Login</Button>
                        {error && <p className="errorMessage">{error}</p>}
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login;