import React from "react";
import "./style.css";
import Post from "../Post";
import dp from "../../assets/profile.jpeg"

const Home = () => {
    let date = new Date();
    date = new Date(date.getTime() - 1236400 * 1000);
    let posts = [
        {
            id: 1,
            url: dp,
            caption: "My new profile picture",
            likes: 424444,
            comments: 23434242,
            user: {
                name: "Mahima jain",
                dp: dp
            },
            createdAt: date,
            mediaType: "img"
        }, {
            id: 2,
            url: dp,
            caption: "My new profile picture",
            likes: 424444,
            comments: 23434242,
            user: {
                name: "Mahima jain",
            },
            createdAt: date,
            mediaType: "img"
        }, {
            id: 3,
            url: dp,
            caption: "My new profile picture",
            likes: 424444,
            comments: 23434242,
            user: {
                name: "Mahima jain",
                dp: dp
            },
            createdAt: date,
            mediaType: "img"
        }, {
            id: 4,
            url: dp,
            caption: "My new profile picture",
            likes: 424444,
            comments: 23434242,
            user: {
                name: "Mahima jain",
            },
            createdAt: date,
            mediaType: "img"
        }, {
            id: 5,
            url: dp,
            caption: "My new profile picture",
            likes: 424444,
            comments: 23434242,
            user: {
                name: "Rahul verma",
            },
            createdAt: date,
            mediaType: "img"
        }, {
            id: 6,
            url: dp,
            caption: "My new profile picture",
            likes: 424444,
            comments: 23434242,
            user: {
                name: "Mahima jain",
                dp: dp
            },
            createdAt: date,
            mediaType: "img"
        }
    ]

    return <div className="home">
        {posts.map(post => {
            return < Post key={post.id} post={post} />
        })}
    </div>
}

export default Home;