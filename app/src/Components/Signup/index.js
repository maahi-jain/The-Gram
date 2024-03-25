import { Button, Card, CardContent, CardHeader, TextField } from "@mui/material";
import React from "react";
import "./style.css";

const Signup = () => {
    return (
        <div className="container">
            <h2>
                Welcome to the Gram !
            </h2>
            <Card>
                <CardContent>
                    <form>
                        <div className="input">
                            <TextField type="text" required label="Mobile Number" variant="outlined" />
                        </div>
                        <div className="input">
                            <TextField type="text" required label="Full Name" variant="outlined" />
                        </div>
                        <div className="input">
                            <TextField type="text" required label="username" variant="outlined" />
                        </div>
                        <div className="input">
                            <TextField type="password" required label="Password" variant="outlined" />
                        </div>
                        <div>
                            <Button variant="contained" type="submit">Submit</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Signup;