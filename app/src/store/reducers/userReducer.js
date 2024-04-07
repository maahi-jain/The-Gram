const initalState = null;

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case "SET_USER":
            state = action.user;
            break;
        default:
            return state
    }
}

export default userReducer;