

const axiosReducer = (state = [], action) => {
  switch (action.type){
    case 'AXIOS':
        return action.payload;
        
    default:
        return state;
}

}

export default axiosReducer;