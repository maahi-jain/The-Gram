const initial = {
    loading: false
}

const uiReducer = (state = initial, action) => {
    switch (action.type) {
        case 'SHOW_LOADER':
            return { loading: true };
        case 'HIDE_LOADER':
            return { loading: false };
        default:
            return state;
    }
}

export default uiReducer;