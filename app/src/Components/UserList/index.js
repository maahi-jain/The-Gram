import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
    return (<List>
        {users && users.map(user => {
            return (
                <div key={user._id}>
                    <Link to="/profile" state={{ user }}> <ListItem key={user._id}>
                        <ListItemAvatar>
                            <Avatar src={`${process.env.REACT_APP_API_URL}/${user?.profilePic}`} />
                        </ListItemAvatar>
                        <ListItemText>{user.name}</ListItemText>
                    </ListItem></Link>
                    <Divider />
                </div>
            )
        })}
    </List>)
}

export default UserList;