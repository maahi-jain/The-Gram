import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";

const baseURL = "http://localhost:8080/"

const UserList = ({ users }) => {
    return (<List>
        {users && users.map(user => {
            return (
                <div key={user.id}>
                    <ListItem key={user._id}>
                        <ListItemAvatar>
                            <Avatar src={baseURL + user?.profilePic} />
                        </ListItemAvatar>
                        <ListItemText>{user.name}</ListItemText>
                    </ListItem>
                    <Divider />
                </div>
            )
        })}
    </List>)
}

export default UserList;