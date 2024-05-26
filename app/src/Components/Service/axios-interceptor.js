import axios from 'axios';

const requestInterceptor = (token) => {
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

const responseInterceptor = () => {
    return axios.interceptors.response.use(
        (response) => {
            // Do something with the response data
            return response;
        },
        (error) => {
            // Handle response errors
            return Promise.reject(error);
        }
    );
};

export { requestInterceptor, responseInterceptor };




