import React, { createContext, useState } from "react";
import { loginService } from "../components/Service/api.service";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../store/action";
import { jwtDecode } from "jwt-decode";

const AuthCtx = createContext();

const AuthProvider = ({ children }) => {
    const user = useSelector(state => state?.user);
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    const dispatchSetUser = async (user) => {
        let action = await setUser(user);
        dispatch(action);
    }

    const dispatchSetToken = async (token) => {
        let action = await setToken(token);
        dispatch(action);
    }

    const login = (userIdOrEmail, password) => {
        doLogin(userIdOrEmail, password).then(async (token) => {
            let decodedToken = jwtDecode(token);
            await dispatchSetToken(token);
            await dispatchSetUser(decodedToken.user);
            setError(null);
        }).catch((error) => {
            dispatchSetUser(null);
            dispatchSetToken(null);
            setError(error);
        })
    }

    const logout = () => {
        dispatchSetUser(null);
        dispatchSetToken(null)
        setError(null);
    }

    return (<AuthCtx.Provider value={{ error, user, login, logout }}>
        {children}
    </AuthCtx.Provider>)
}

const doLogin = (userIdOrEmail, password) => {
    return new Promise((resolve, reject) => {
        loginService(userIdOrEmail, password).then((res) => {
            resolve(res.token)
        }).catch((err) => {
            reject(err.message)
        })
    })
}

export { AuthCtx, AuthProvider };