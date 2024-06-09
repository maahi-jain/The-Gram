import axios from 'axios';
import { setToken, setUser } from '../../store/action';
import { refreshToken } from './api.service';
import store from "../../store";

const dispatch = store.dispatch;
const requestInterceptor = () => {
    return axios.interceptors.request.use(
        (config) => {
            const state = store.getState();
            const token = state.auth.token;
            if (token) {
                config.headers.Authorization = token;
            }
            return config;
        }, (error) => {
            return Promise.reject(error)
        }
    );
};

const responseInterceptor = () => {
    return axios.interceptors.response.use(
        async (response) => {
            // Do something with the response data
            if (response?.data?._user) {
                let action = await setUser(response.data._user);
                updateToken(response.data._user);
                dispatch(action);
            }
            return response;
        },
        (error) => {
            // Handle response errors
            return Promise.reject(error);
        }
    );
};

const updateToken = async (user) => {
    if (user) {
        let response = await refreshToken(user);
        let action = await setToken(response.token);
        dispatch(action);
    }
}

export { requestInterceptor, responseInterceptor };




