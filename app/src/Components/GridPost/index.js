import { Grid, Paper, styled } from "@mui/material"
import "./style.css";
import MyPost from "../MyPost";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const GridPost = ({ posts }) => {
    const [openPost, setOpenPost] = useState(false);
    const [openedPost, setOpenedPost] = useState({});
    const handleClick = (post) => {
        setOpenedPost(post);
        setOpenPost(true);
    }

    const close = () => {
        setOpenPost(false);
    }

    return <>
        {posts?.length > 0 && <Grid container direction="row" m={4} spacing={1}>
            {posts.map((post) => <Grid key={post._id} item s={2}>
                <Item onClick={() => handleClick(post)}><img className="gridImage" alt="user-post" src={`${process.env.REACT_APP_API_URL}/${post.content}`} /></Item>
            </Grid>)}
        </Grid>
        }
        <MyPost open={openPost} onClose={close} post={openedPost} />
    </>
}

export default GridPost;