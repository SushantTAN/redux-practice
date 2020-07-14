const axiospReducer = (state = [], action) => {
    switch (action.type){
      case 'AXIOSP':
          return [...state, action.payload];
          
      default:
          return state;
    }
  }
  
  export default axiospReducer;