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