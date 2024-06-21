const initalState = {
    _id: '',
    userId: '',
    name: '',
    email: '',
    bio: '',
    profileUrl: '',
    followers: [],
    following: []
};

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                _id: action.user?._id,
                email: action.user?.email,
                phoneNumber: action.user?.phoneNumber,
                userId: action.user?.userId,
                name: action.user?.name,
                bio: action.user?.bio,
                profileUrl: action.user?.profileUrl,
                followers: action.user?.followers,
                following: action.user?.following
            }
        default:
            return state
    }
}

export default userReducer;