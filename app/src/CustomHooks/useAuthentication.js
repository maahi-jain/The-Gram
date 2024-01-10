import React, { createContext, useState } from "react";

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
    if (email === "mahi@gmail.com" && password === "mahi123") {
        return Promise.resolve({
            id: 1,
            name: "Mahima"
        });
    } else {
        throw Promise.reject("UnAuthenticated!");
    }
}