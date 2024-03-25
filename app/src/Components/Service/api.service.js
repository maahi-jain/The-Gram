import axios from 'axios';
const baseURL = "http://localhost:8080";

export const loginService = async (userIdOrEmail, password) => {
    try {
        const body = {
            userIdOrEmail,
            password
        };

        const res = await axios.post(`${baseURL}/user/login`, body);
        return res.data;

    } catch (error) {
        console.log(error);
        throw error.response.data; // Rethrow the error for handling at a higher level if needed
    }
};