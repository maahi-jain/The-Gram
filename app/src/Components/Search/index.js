import React from "react"
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import dp from "../../assets/profilePic.jpeg";
import UserList from "../UserList";

const Search = () => {
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
    return (
        <>
            <div className="searchBar">
                <input type="text" className="searchInput" placeholder="search" />
                <SearchIcon />
            </div>
            <div className="userList">
                <UserList users={userList} />
            </div>
        </>

    )
}

export default Search;