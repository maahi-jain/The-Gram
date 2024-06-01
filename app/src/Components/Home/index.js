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
    // let posts = [
    //     {
    //         id: 1,
    //         url: dp,
    //         caption: "My new profile picture",
    //         likes: 424444,
    //         comments: 23434242,
    //         user: {
    //             name: "Mahima jain",
    //             dp: dp
    //         },
    //         createdAt: date,
    //         mediaType: "img"
    //     }, {
    //         id: 2,
    //         url: dp,
    //         caption: "My new profile picture",
    //         likes: 424444,
    //         comments: 23434242,
    //         user: {
    //             name: "Mahima jain",
    //         },
    //         createdAt: date,
    //         mediaType: "img"
    //     }, {
    //         id: 3,
    //         url: dp,
    //         caption: "My new profile picture",
    //         likes: 424444,
    //         comments: 23434242,
    //         user: {
    //             name: "Mahima jain",
    //             dp: dp
    //         },
    //         createdAt: date,
    //         mediaType: "img"
    //     }, {
    //         id: 4,
    //         url: dp,
    //         caption: "My new profile picture",
    //         likes: 424444,
    //         comments: 23434242,
    //         user: {
    //             name: "Mahima jain",
    //         },
    //         createdAt: date,
    //         mediaType: "img"
    //     }, {
    //         id: 5,
    //         url: dp,
    //         caption: "My new profile picture",
    //         likes: 424444,
    //         comments: 23434242,
    //         user: {
    //             name: "Rahul verma",
    //         },
    //         createdAt: date,
    //         mediaType: "img"
    //     }, {
    //         id: 6,
    //         url: dp,
    //         caption: "My new profile picture",
    //         likes: 424444,
    //         comments: 23434242,
    //         user: {
    //             name: "Mahima jain",
    //             dp: dp
    //         },
    //         createdAt: date,
    //         mediaType: "img"
    //     }
    // ]

    return <div className="home">
        {posts.length > 0 ? posts?.map(post => {
            return < Post key={post.id} post={post} />
        }) : <h1>No posts found !</h1>}
    </div>
}

export default Home;