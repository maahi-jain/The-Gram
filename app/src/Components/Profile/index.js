import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar, Button } from '@mui/material';
import dp from '../../assets/profilePic.jpeg';
import './style.css';
import useWindowSize from '../../customHooks/useWindowSize';
import UserList from '../UserList';
import { useSelector } from 'react-redux';

export default function LabTabs() {
    const [value, setValue] = React.useState('1');
    const user = useSelector(state => state.user);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // let user = {
    //     id: 1,
    //     name: "Mahima Jain",
    //     profile: dp,
    //     bio: "hey",
    //     followers: {
    //         count: 1232432
    //     },
    //     following: {
    //         count: 2459827405
    //     }
    // }

    let userList = [{
        id: 1,
        dp: dp,
        name: "Mahima Jain"
    }, {
        id: 2,
        dp: dp,
        name: "Mahima Jain"
    }, {
        id: 3,
        dp: dp,
        name: "Mahima Jain"
    }, {
        id: 4,
        dp: dp,
        name: "Mahima Jain"
    }]

    const isMobile = useWindowSize();

    return (
        <>
            <div className='profileDetails'>
                <Avatar alt='profilePic' className={isMobile ? "profileAvatar mobile" : "profileAvatar desktop"} src={user.profilePic} />
                <div>
                    <div>{user.userId}</div>
                    <div>{user.name}</div>
                    <div>{user.bio}</div>
                    <Button className='editButton' variant='contained'>Edit Profile</Button>
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
                    <TabPanel value="1">Post</TabPanel>
                    <TabPanel value="2"><UserList users={userList} /></TabPanel>
                    <TabPanel value="3"><UserList users={userList} /></TabPanel>
                </TabContext>
            </Box>
        </>
    );
}
