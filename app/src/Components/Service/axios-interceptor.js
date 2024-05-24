import axios from 'axios';

const requestInterceptor = () => {
    return axios.interceptors.request.use(
        (config) => {
            let token = localStorage.getItem('token');

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




