import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ user, children, ...rest }) => {
    return (
        user ? children : <Navigate to="/" replace />
    )
}

export default Protected;