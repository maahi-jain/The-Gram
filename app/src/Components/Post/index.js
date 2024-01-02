import React from "react";
import "./style.css";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton, Typography } from "@mui/material";
import { create } from "@mui/material/styles/createTransitions";

const Post = ({ post }) => {
    const { url, caption, likes, comments, user, createdAt, mediaType } = post;
    // let postedSince = await getSince(createdAt);
    // let initials;
    // if (!user.dp) {
    //     initials = await getInitials(user.name);
    // }

    return (
        <Card className="post">
            <CardHeader avatar={user.dp ? <Avatar src={user.dp} alt="dp" title={user.name} subheader="few sec ago" /> : <Avatar label='dp'>MJ</Avatar>} title={user.name} subheader="few sec ago" />
            <CardMedia component={mediaType} alt="post" src={url} />
            <CardContent>
                {caption}
            </CardContent>
            <CardActions>
                <IconButton aria-label="Add to Fav">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
            <CardContent id="likes">
                <Typography variant="subtitle2" gutterBottom>
                    {likes} likes
                </Typography>
            </CardContent>
        </Card>
    )
}

const getSince = async (createdAt) => {
    let currDate = new Date();
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

const getInitials = async (userName) => {
    let name = userName.split(" ");
    let initials = "";
    name.forEach((elem) => {
        initials += elem.substring(0, 1)
    });
    return initials;
}

export default Post;


