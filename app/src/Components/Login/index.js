import { Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import React from "react";
import "./style.css"

const Login = () => {
    return (
        <div className="container">
            <Card id="loginForm">
                <CardContent>
                    <form>
                        <div className="input">
                            <TextField label="Email" variant="outlined" />
                        </div>
                        <div className="input">
                            <TextField label="Password" variant="outlined" />
                        </div>
                    </form>
                </CardContent>
                <CardActions>
                    <Button className="loginButton" variant="contained">Logn in</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Login;