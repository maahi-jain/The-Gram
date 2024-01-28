import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthCtx = createContext();

const useAuthentication = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const login = (email, password) => {
        doLogin(email, password).then((user) => {
            setUser(user);
            setError(null);
        }).catch((error) => {
            setUser(null);
            setError(error);
        })
    }

    const logout = () => {
        setUser(null);
        setError(null);
    }

    return {
        AuthCtx,
        AuthProvider: ({ children }) => (
            <AuthCtx.Provider value={{ error, user, login, logout }}>
                {children}
            </AuthCtx.Provider>
        )
    }
}

export default useAuthentication;

const doLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        if (email === "mahi@gmail.com" && password === "mahi123") {
            resolve({
                id: 1,
                name: "Mahima"
            });
        } else {
            reject("Invalid credentials!");
        }
    })
}