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
import { getUserPost } from '../Service/api.service';
import GridPost from '../GridPost';
import { useLocation } from 'react-router-dom';

export default function Profile(props) {
    const [value, setValue] = React.useState('1');
    const location = useLocation();
    const searchUser = location.state?.user;
    const loggedInUser = useSelector(state => state.user);
    const user = searchUser || loggedInUser;
    const token = useSelector(state => state.auth.token);
    const [posts, setPosts] = useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        getUserPost(user.userId, token).then((res) => {
            setPosts(res.posts);
        })
    }, [])

    const isMobile = useWindowSize();

    return (
        <>
            <div className='profileDetails'>
                <Avatar alt='profilePic' className={isMobile ? "profileAvatar mobile" : "profileAvatar desktop"} src={user.profilePic} />
                <div>
                    <div>{user.userId}</div>
                    <div>{user.name}</div>
                    <div>{user.bio}</div>
                    {!searchUser && <Button className='actionButton' variant='contained'>Edit Profile</Button>}
                    {searchUser && <Button className='actionButton' variant='contained'>Follow</Button>}
                </div>
            </div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Posts" value="1" />
                            {/* <Tab label={user.followers.count + "\n followers"} value="2" />
                            <Tab label={user.following.count + "\n following"} value="3" /> */}
                        </TabList>
                    </Box>
                    <TabPanel value="1"><GridPost posts={posts} /></TabPanel>
                    {/* <TabPanel value="2"><UserList users={userList} /></TabPanel>
                    <TabPanel value="3"><UserList users={userList} /></TabPanel> */}
                </TabContext>
            </Box>
        </>
    );
}
