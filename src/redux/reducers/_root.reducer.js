import { combineReducers } from 'redux';
import poolReducer from './pool.reducer';
import playersReducer from './players.reducer';
import loginReducer from './login.reducer';
import auctionItemReducer from './auctionItem.reducer';
import auctionSeasonReducer from './auctionSeason.reducer';
import auctionSportsReducer from './auctionSports.reducer';

const rootReducer = combineReducers({
    auctionSportsReducer,
    auctionSeasonReducer,
    auctionItemReducer,
    poolReducer,
    playersReducer,
    loginReducer,
})

export default rootReducer;