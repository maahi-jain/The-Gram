import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar, Button } from '@mui/material';
import './style.css';
import useWindowSize from '../../customHooks/useWindowSize';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { follow, getUserPost } from '../Service/api.service';
import GridPost from '../GridPost';
import { useLocation } from 'react-router-dom';
import UserList from '../UserList';

export default function Profile(props) {
    const [value, setValue] = React.useState('1');
    const location = useLocation();
    const searchUser = location.state?.user;
    const loggedInUser = useSelector(state => state.user);
    const user = searchUser || loggedInUser;
    const [posts, setPosts] = useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        getUserPost(user.userId).then((res) => {
            setPosts(res.posts);
        })
    }, [])

    const isMobile = useWindowSize();

    const followUser = async (user) => {
        await follow(user._id);
    }

    return (
        <>
            <div className='profileDetails'>
                <Avatar alt='profilePic' className={isMobile ? "profileAvatar mobile" : "profileAvatar desktop"} src={user.profilePic} />
                <div>
                    <div>{user.userId}</div>
                    <div>{user.name}</div>
                    <div>{user.bio}</div>
                    {!searchUser && <Button className='actionButton' variant='contained'>Edit Profile</Button>}
                    {searchUser && <Button className='actionButton' onClick={() => follow(user)} variant='contained'>Follow</Button>}
                </div>
            </div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Posts" value="1" />
                            <Tab label={user.followers.length + "\n followers"} value="2" />
                            <Tab label={user.following.length + "\n following"} value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><GridPost posts={posts} /></TabPanel>
                    <TabPanel value="2"><UserList users={user.followers} /></TabPanel>
                    <TabPanel value="3"><UserList users={user.following} /></TabPanel>
                </TabContext>
            </Box>
        </>
    );
}
