import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

export default combineReducers({
    user: userReducer,
    auth: authReducer
})