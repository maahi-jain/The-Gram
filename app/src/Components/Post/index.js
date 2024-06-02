import React, { useEffect, useState } from "react";
import "./style.css";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { addLike, unlike } from "../Service/api.service";

const Post = ({ post }) => {
    const { content, caption, likes, comments, user, createdAt } = post;
    const loggedInUserId = useSelector((state) => state.user._id);
    const [liked, setLiked] = useState(likes.includes(loggedInUserId));
    const [likeCount, setLikeCount] = useState(likes.length);
    let postedSince = getSince(createdAt);
    let initials;
    if (!user.profilePic) {
        initials = getInitials(user.name);
    }

    const updateLike = async () => {
        if (liked) {
            await unlike(post._id);
            setLiked(false);
            setLikeCount(likeCount - 1);
        } else {
            await addLike(post._id);
            setLiked(true);
            setLikeCount(likeCount + 1);
        }
    }

    return (
        <Card className="post">
            <CardHeader avatar={user.profilePic ? <Avatar src={`${process.env.REACT_APP_API_URL}/${user.profilePic}`} alt="profilePic" title={user.name} subheader={postedSince} /> : <Avatar label='profilePic'>{initials}</Avatar>} title={user.name} subheader={postedSince} />
            <CardMedia component="img" alt="post" src={`${process.env.REACT_APP_API_URL}/${content}`} />
            <CardContent>
                {caption}
            </CardContent>
            <CardActions>
                <IconButton aria-label="Add to Fav" onClick={updateLike}>
                    <FavoriteIcon className={liked && 'like'} />
                </IconButton>
            </CardActions>
            <CardContent id="likes">
                <Typography variant="subtitle2" gutterBottom>
                    {likeCount} likes
                </Typography>
            </CardContent>
        </Card>
    )
}

const getSince = (createdAt) => {
    let currDate = new Date();
    createdAt = new Date(createdAt);
    let timeDifferenceInSeconds = (currDate - createdAt) / 1000;
    let postedSince;
    if (timeDifferenceInSeconds < 1) {
        postedSince = "few sec ago";
    } else if (timeDifferenceInSeconds < 60) {
        postedSince = Math.floor(timeDifferenceInSeconds) + " s ago";
    } else if (timeDifferenceInSeconds < 3600) {
        postedSince = Math.floor(timeDifferenceInSeconds / 60) + " min ago";
    } else if (timeDifferenceInSeconds < 86400) {
        postedSince = Math.floor(timeDifferenceInSeconds / 3600) + " h ago"
    } else {
        postedSince = Math.floor(timeDifferenceInSeconds / 86400) + " days ago"
    }

    return postedSince;
}

const getInitials = (userName) => {
    let name = userName.split(" ");
    let initials = "";
    name.forEach((elem) => {
        initials += elem.substring(0, 1).toUpperCase();
    });
    return initials;
}



export default Post;


