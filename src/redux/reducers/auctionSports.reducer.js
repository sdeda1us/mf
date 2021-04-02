const auctionSportsReducer = (state = {}, action) => {
    if(action.type === 'SET_AUCTION_SPORTS') {
        return action.payload;
    } else {
        return state;
    }
  };
  
  
  export default auctionSportsReducer;