import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../Service/api.service";
import "./style.css";

const UserList = ({ users }) => {
    const navigate = useNavigate();
    const navigateToProfile = async (id) => {
        let res = await getUserDetails(id);
        navigate("/profile", { state: { user: res.user } })
    }

    return (<List>
        {users && users.map(user => {
            return (
                <div key={user._id}>
                    <ListItem key={user._id} onClick={() => navigateToProfile(user._id)} className="userListItem">
                        <ListItemAvatar>
                            <Avatar src={`${user?.profilePic}`} />
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