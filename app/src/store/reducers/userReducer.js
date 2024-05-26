const initalState = {
    userId: '',
    name: '',
    email: '',
    bio: '',
    profilePic: '',
    followers: [],
    following: []
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
                profilePic: action.user?.profilePic,
                followers: action.user?.followers,
                following: action.user?.following
            }
        default:
            return state
    }
}

export default userReducer;