import React, { createContext, useState } from "react";
import { loginService } from "../components/Service/api.service";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/userAction";

const AuthCtx = createContext();

const AuthProvider = ({ children }) => {
    const user = useSelector(state => state?.user);
    console.log(user);
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    const dispatchSetUser = async (user) => {
        let action = await setUser(user);
        dispatch(action);
    }

    const login = (userIdOrEmail, password) => {
        doLogin(userIdOrEmail, password).then((user) => {
            dispatchSetUser(user);
            setError(null);
        }).catch((error) => {
            dispatchSetUser(null);
            setError(error);
        })
    }

    const logout = () => {
        dispatchSetUser(null);
        setError(null);
    }

    return (<AuthCtx.Provider value={{ error, user, login, logout }}>
        {children}
    </AuthCtx.Provider>)
}

const doLogin = (userIdOrEmail, password) => {
    return new Promise((resolve, reject) => {
        loginService(userIdOrEmail, password).then((res) => {
            resolve(res.user)
        }).catch((err) => {
            reject(err.message)
        })
    })
}

export { AuthCtx, AuthProvider };