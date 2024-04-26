const initalState = {
    userId: '',
    name: '',
    email: '',
    bio: '',
    profilePic: '',
};

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                email: action.user?.email,
                userId: action.user?.userId,
                name: action.user?.name,
                bio: action.user?.bio,
                profilePic: "http://localhost:8080/" + action.user?.profilePic
            }
        default:
            return state
    }
}

export default userReducer;