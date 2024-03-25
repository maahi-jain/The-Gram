import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../Components/Service/api.service";

const AuthCtx = createContext();

const useAuthentication = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const login = (userIdOrEmail, password) => {
        doLogin(userIdOrEmail, password).then((user) => {
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

const doLogin = (userIdOrEmail, password) => {
    return new Promise((resolve, reject) => {
        loginService(userIdOrEmail, password).then((res) => {
            resolve(res.user)
        }).catch((err) => {
            reject(err.message)
        })
    })
}