import React, { useEffect, useState } from "react";
import "./style.css";
import Post from "../Post";
import dp from "../../assets/profilePic.jpeg"
import { getFollowingPost } from "../Service/api.service";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            let res = await getFollowingPost();
            setPosts(res.posts);
        };
        getPosts();
    }, [])

    return <div className="home">
        {posts.length > 0 ? posts?.map(post => {
            return < Post key={post._id} post={post} />
        }) : <h1>No posts found !</h1>}
    </div>
}

export default Home;