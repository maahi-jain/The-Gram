import axios from 'axios';
import { useSelector } from 'react-redux';

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

export const signUp = async (user) => {
    try {
        let formData = new FormData();
        formData.append('name', user.name);
        formData.append('userId', user.userId);
        formData.append('password', user.password);
        formData.append('phoneNumber', user.phoneNumber);
        formData.append('email', user.email);
        formData.append('profilePic', user.profilePic);

        const res = await axios.post(`${baseURL}/user/signup`, formData);
        return res.data;

    } catch (error) {
        console.log(error);
        throw error.response.data; // Rethrow the error for handling at a higher level if needed
    }
}

export const createPost = async (post, token) => {
    try {
        let formData = new FormData();
        formData.append('content', post.content);
        formData.append('caption', post.caption);
        let httpOptions = {
            headers: {
                Authorization: token
            }
        }
        const res = await axios.post(`${baseURL}/post/`, formData, httpOptions);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
}

export const getUserList = async (q, token) => {
    try {
        let httpOptions = {
            headers: {
                Authorization: token
            }, params: {
                q
            }
        }
        const res = await axios.get(`${baseURL}/user/`, httpOptions);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
}