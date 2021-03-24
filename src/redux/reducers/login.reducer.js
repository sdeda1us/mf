const loginReducer = (state = [], action) => {
    if(action.type === 'SET_LOGIN') {
        return action.payload;
    } else {
        return state;
    }
  };
  
  
  export default loginReducer;