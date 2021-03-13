const playersReducer = (state = [], action) => {
    if(action.type === 'SET_POOL') {
        return action.payload;
    } else {
        return state;
    }
  };
  
  
  export default playersReducer;