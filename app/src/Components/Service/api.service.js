import axios from 'axios';

export const loginService = async (userIdOrEmail, password) => {
    try {
        const body = {
            userIdOrEmail,
            password
        };

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, body);
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

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/signup`, formData);
        return res.data;

    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
}

export const createPost = async (post) => {
    try {
        let formData = new FormData();
        formData.append('content', post.content);
        formData.append('caption', post.caption);
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/post/`, formData);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
}

export const getUserDetails = async (id) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
}

export const getUserList = async (q) => {
    try {
        let httpOptions = {
            params: {
                q
            }
        }
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/`, httpOptions);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
}

export const getUserPost = async (userId) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/${userId}/post`);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
}

export const follow = async (userId) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/follow/${userId}`);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error.response;
    }
}

export const unfollow = async (userId) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/unfollow/${userId}`);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
}

export const getFollowingPost = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/post`);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
}

export const refreshToken = async (user) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/refresh-token`, { user });
        return res.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
}

export const addLike = async (id) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/post/${id}/like`);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
}

export const unlike = async (id) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/post/${id}/unlike`);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
}

export const deletePostAPI = async (id) => {
    try {
        const res = await axios.delete(`${process.env.REACT_APP_API_URL}/post/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
}

