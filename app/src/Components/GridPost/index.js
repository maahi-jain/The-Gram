import { Grid, Paper, styled } from "@mui/material"
import "./style.css";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const GridPost = ({ posts }) => {
    return <>
        {
            posts?.length > 0 && <Grid container direction="row" m={4} spacing={1}>
                {posts.map((post) => <Grid key={post._id} item s={2}>
                    <Item><img className="gridImage" alt="user-post" src={`${process.env.REACT_APP_API_URL}/${post.content}`} /></Item>
                </Grid>)}
            </Grid>
        }
    </>
}

export default GridPost;