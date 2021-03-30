const auctionSeasonReducer = (state = {}, action) => {
    if(action.type === 'SET_AUCTION_SEASON') {
        let value = 0;
        action.payload.map((season)=> {if(season.year===2021){value = season;}})
        return value;
    } else {
        return state;
    }
  };
  
  
  export default auctionSeasonReducer;