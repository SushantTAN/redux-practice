const loggedReducer = (state = false, action) => {
    switch (action.type){
        case 'signIn':
            return !state;
        case 'logOut':
            return false;
        default:
            return state;

    }
}
export default loggedReducer;