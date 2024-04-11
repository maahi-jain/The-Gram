import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ children, ...rest }) => {
    const isLoggedIn = useSelector(state => state.token.isLoggedIn);
    return (
        isLoggedIn ? children : <Navigate to="/" replace />
    )
}

export default Protected;