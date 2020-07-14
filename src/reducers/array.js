const arrayReducer = (state = [], action) => {
    switch (action.type){
        case 'ADDEL':
            return [...state, "one"];
            
        default:
            return state;
    }
}

export default arrayReducer;