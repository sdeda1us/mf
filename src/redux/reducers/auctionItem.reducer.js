const auctionItemsReducer = (state = {}, action) => {
    if(action.type === 'SET_AUCTION_ITEM') {
        return action.payload;
    } else {
        return state;
    }
  };
  
  
  export default auctionItemsReducer;