import { Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./style.css"
import useAuthentication from "../../CustomHooks/useAuthentication";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { AuthCtx } = useAuthentication();
    const { user, error, login } = useContext(AuthCtx);
    const navigate = useNavigate();
    const location = useLocation();
    // const from = location?.state?.from?.pathName || "/home"

    useEffect(() => {
        user && navigate("/home");
    }, [user, navigate]);

    return (
        <div className="container">
            <Card id="loginForm">
                <CardContent>
                    <form>
                        <div className="input">
                            <TextField label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input">
                            <TextField label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </form>
                </CardContent>
                <CardActions>
                    <Button className="loginButton" variant="contained" onClick={() => login(email, password)}>Logn in</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Login;