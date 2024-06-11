import authReducer from "./authReducer";
import uiReducer from "./uiReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

export default combineReducers({
    user: userReducer,
    auth: authReducer,
    ui: uiReducer
})