import axios from 'axios';
import { hideLoader, setToken, setUser, showLoader } from '../../store/action';
import { refreshToken } from './api.service';
import store from "../../store";

const dispatch = store.dispatch;
const requestInterceptor = () => {
    return axios.interceptors.request.use(
        async (config) => {
            const state = store.getState();
            const token = state.auth.token;
            const action = await showLoader();
            dispatch(action);
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
            let loadingAction = await hideLoader();
            dispatch(loadingAction);
            // Do something with the response data
            if (response?.data?._user) {
                let action = await setUser(response.data._user);
                dispatch(action);
            }
            return response;
        },
        async (error) => {
            let loadingAction = await hideLoader();
            dispatch(loadingAction);
            // Handle response errors
            return Promise.reject(error);
        }
    );
};

export { requestInterceptor, responseInterceptor };




