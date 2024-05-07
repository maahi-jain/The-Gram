import React, { useCallback, useEffect, useState } from "react"
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";
import debounce from "lodash.debounce";
import UserList from "../UserList";
import { getUserList } from "../Service/api.service";
import { useSelector } from "react-redux";

const Search = () => {
    const [searchVal, setSearchVal] = useState('');
    const [userList, setUserList] = useState([]);
    const token = useSelector((state) => state.auth.token)

    const fetchUsers = () => {
        getUserList(searchVal, token).then((res) => {
            setUserList(res.users)
        }).catch((err) => {
            console.log(err);
        })
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleInputChange = (event) => {
        setSearchVal(event.target.value);
        debounce(fetchUsers, 500)();
    }

    return (
        <>
            <div className="searchBar">
                <input type="text" onChange={handleInputChange} value={searchVal} className="searchInput" placeholder="search" />
                <SearchIcon />
            </div>
            <div className="userList">
                <UserList users={userList} />
            </div>
        </>

    )
}

export default Search;