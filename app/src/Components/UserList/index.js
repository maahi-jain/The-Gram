import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";

const UserList = ({ users }) => {
    return (<List>
        {users.map(user => {
            return (
                <div key={user.id}>
                    <ListItem key={user.id}>
                        <ListItemAvatar>
                            <Avatar src={user.dp} />
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