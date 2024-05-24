import axios from 'axios';

axios.interceptors.request.use(
    function (config) {
        let token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    }, function (error) {
        return Promise.reject(error)
    }
)