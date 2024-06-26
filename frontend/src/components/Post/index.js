import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, Dialog, DialogActions, DialogContent, IconButton, Input, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addLike, removePost, unlike, updatePost } from "../Service/api.service";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./style.css";

const Post = ({ post, myProfile, refreshPost, close }) => {
    const { content, caption, likes, comments, user, createdAt } = post;
    const [cardContent, setCardContent] = useState(caption);
    const loggedInUserId = useSelector((state) => state.user._id);
    const [liked, setLiked] = useState(likes.includes(loggedInUserId));
    const [likeCount, setLikeCount] = useState(likes.length);
    let postedSince = getSince(createdAt);

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

    // My post edit-delete
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const closeMenu = () => {
        setAnchorEl(null);
    };
    const deletePost = () => {
        setDeleteDialog(true);
    }
    const confirmDeletePost = async () => {
        await removePost(post._id);
        setDeleteDialog(false);
        refreshPost();
        close();
    }
    const editPost = () => {
        setEditMode(true);
        setAnchorEl(null);
    }
    const confirmEdit = async () => {
        await updatePost(post._id, cardContent);
        setEditMode(false);
        refreshPost();
    }
    const closeDeleteDialog = () => {
        setDeleteDialog(false);
    }

    return (
        <>
            <Card className="post">
                <CardHeader avatar={<Avatar src={`${user.profileUrl}`} title={user.name} subheader={postedSince} />}
                    title={user.name}
                    subheader={postedSince}
                    action={
                        myProfile && <IconButton onClick={openMenu} aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    } />
                <CardMedia component="img" alt="post" src={`${content}`} />
                <CardContent>
                    {!editMode && cardContent}
                    {editMode && <div className='editCaption'><Input value={cardContent} onChange={(event) => setCardContent(event.target.value)} /><Button variant='contained' onClick={confirmEdit}>Save</Button></div>}
                </CardContent>
                <CardActions>
                    <IconButton aria-label="Add to Fav" onClick={updateLike}>
                        <FavoriteIcon className={liked ? 'like' : 'unlike'} />
                    </IconButton>
                </CardActions>
                <CardContent id="likes">
                    <Typography variant="subtitle2" gutterBottom>
                        {likeCount} likes
                    </Typography>
                </CardContent>
            </Card>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={closeMenu}
            >
                <MenuItem onClick={editPost}><ListItemIcon><EditIcon /></ListItemIcon><ListItemText>Edit</ListItemText></MenuItem>
                <MenuItem onClick={deletePost}><ListItemIcon><DeleteIcon /></ListItemIcon><ListItemText>Delete</ListItemText></MenuItem>
            </Menu>
            {<Dialog open={deleteDialog}>
                <DialogContent>
                    Do you want to delete this Post?
                </DialogContent>
                <DialogActions>
                    <Button onClick={confirmDeletePost}>Yes</Button>
                    <Button onClick={closeDeleteDialog}>No</Button>
                </DialogActions>
            </Dialog>}
        </>
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


export default Post;


