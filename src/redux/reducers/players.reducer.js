const playersReducer = (state = [], action) => {
    if(action.type === 'SET_PLAYERS') {
        return action.payload;
    } else {
        return state;
    }
  };
  
  
  export default playersReducer;