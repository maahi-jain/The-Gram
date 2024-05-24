const initialState = {
    isLoggedIn: false,
    token: null
}

const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TOKEN":
            localStorage.setItem('token', action.token)
            return {
                ...state,
                token: action.token,
                isLoggedIn: action.token ? true : false
            };

        default:
            return state;
    }
}

export default tokenReducer;