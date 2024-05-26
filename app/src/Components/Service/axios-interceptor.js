import axios from 'axios';
import { setToken, setUser } from '../../store/action';

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
        (response) => {
            // Do something with the response data
            if (response?._user) {
                dispatch(setUser(response._user))
            }
            return response;
        },
        (error) => {
            // Handle response errors
            return Promise.reject(error);
        }
    );
};

export { requestInterceptor, responseInterceptor };




