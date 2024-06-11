export const setUser = async (user) => {
    return {
        type: "SET_USER",
        user
    }
}

export const setToken = async (token) => {
    return {
        type: "SET_TOKEN",
        token
    }
}

export const showLoader = async () => {
    return {
        type: "SHOW_LOADER",
    }
}

export const hideLoader = async () => {
    return {
        type: "HIDE_LOADER",
    }
}
