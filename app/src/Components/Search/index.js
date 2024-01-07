import React from "react"
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import dp from "../../assets/profile.jpeg";

const Search = () => {
    let userList = [{
        dp: dp,
        name: "Mahima Jain"
    }, {
        dp: dp,
        name: "Mahima Jain"
    }, {
        dp: dp,
        name: "Mahima Jain"
    }, {
        dp: dp,
        name: "Mahima Jain"
    }]
    return (
        <>
            <div className="searchBar">
                <input type="text" className="searchInput" placeholder="search" />
                <SearchIcon />
            </div>
            <div className="userList">
                <List>
                    {userList.map(user => {
                        return (
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={user.dp} />
                                </ListItemAvatar>
                                <ListItemText>{user.name}</ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        </>

    )
}

export default Search;