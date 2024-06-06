import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar, Button } from '@mui/material';
import useWindowSize from '../../customHooks/useWindowSize';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { follow, getUserPost, unfollow } from '../Service/api.service';
import GridPost from '../GridPost';
import { useLocation } from 'react-router-dom';
import UserList from '../UserList';
import EditProfile from '../EditProfile';
import './style.css';

export default function Profile() {
    const [value, setValue] = React.useState('1');
    const location = useLocation();
    const [searchUser, setSearchUser] = useState(location.state?.user);
    const [showFollow, setShowFollow] = useState(true);
    const [myProfile, setMyProfile] = useState(false);
    const loggedInUser = useSelector(state => state.user);
    let user = searchUser || loggedInUser;
    const [posts, setPosts] = useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        user = searchUser || loggedInUser;
    }, [])

    useEffect(() => {
        setMyProfile(!searchUser || searchUser._id === loggedInUser._id);
    }, [searchUser, loggedInUser]);

    useEffect(() => {
        setSearchUser(location.state?.user);
    }, [location.state?.user]);

    useEffect(() => { getPost() }, [user.userId])

    const getPost = () => {
        getUserPost(user.userId).then((res) => {
            setPosts(res.posts);
        })
    }

    const followUser = async (user) => {
        let res = await follow(user._id);
        setSearchUser(res?.searchUser);
    }

    const unfollowUser = async (user) => {
        let res = await unfollow(user._id);
        setSearchUser(res?.searchUser);
    }

    useEffect(() => {
        if (searchUser) {
            let result = loggedInUser?.following?.find((u) => u._id === searchUser._id)
            result ? setShowFollow(false) : setShowFollow(true);
        }
    }, [searchUser, loggedInUser])


    // Edit profile
    const [editProfile, setEditProfile] = useState(false);

    const openEditProfile = () => {
        setEditProfile(true);
    }

    const closeEditProfile = () => {
        setEditProfile(false);
    }

    return (
        <>
            <div className='profileDetails'>
                <Avatar src={`${process.env.REACT_APP_API_URL}/${user.profilePic}`} title={user.name} />
                <div>
                    <div>{user.name}</div>
                    <div>{user.bio}</div>
                    {myProfile && <Button className='actionButton' variant='contained' onClick={openEditProfile}>Edit Profile</Button>}
                    {!myProfile && showFollow && <Button className='actionButton' onClick={() => followUser(user)} variant='contained'>Follow</Button>}
                    {!myProfile && !showFollow && <Button className='actionButton' onClick={() => unfollowUser(user)} variant='contained'>Unfollow</Button>}
                </div>
            </div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Posts" value="1" />
                            <Tab label={user.followers?.length + "\n followers"} value="2" />
                            <Tab label={user.following?.length + "\n following"} value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><GridPost posts={posts} myProfile={myProfile} refreshPost={getPost} /></TabPanel>
                    <TabPanel value="2"><UserList users={user.followers} /></TabPanel>
                    <TabPanel value="3"><UserList users={user.following} /></TabPanel>
                </TabContext>
            </Box>
            <EditProfile open={editProfile} onClose={closeEditProfile} />
        </>
    );
}
