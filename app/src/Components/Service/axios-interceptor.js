import axios from 'axios';
import { setToken, setUser } from '../../store/action';
import { refreshToken } from './api.service';

const requestInterceptor = ({ token }) => {
    return axios.interceptors.request.use(
        (config) => {
            if (token) {
                config.headers.Authorization = token;
            }
            return config;
        }, (error) => {
            return Promise.reject(error)
        }
    );
};

const responseInterceptor = ({ dispatch }) => {
    return axios.interceptors.response.use(
        async (response) => {
            // Do something with the response data
            if (response?.data?._user) {
                let action = await setUser(response.data._user);
                updateToken(dispatch, response.data._user);
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

const updateToken = async (dispatch, user) => {
    if (user) {
        let token = await refreshToken(user);
        let action = await setToken(token);
        dispatch(action);
    }
}

export { requestInterceptor, responseInterceptor };




