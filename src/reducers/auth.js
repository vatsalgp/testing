const authReducer = (state = false, action) => {
    switch (action.type) {
        case "CHANGE_AUTH":
            return !state;
        default:
            return state;
    }
};

export default authReducer;