import { combineReducers } from 'redux';
import poolReducer from './pool.reducer';
import playersReducer from './players.reducer';
import loginReducer from './login.reducer';
import auctionItemReducer from './auctionItem.reducer';

const rootReducer = combineReducers({
    auctionItemReducer,
    poolReducer,
    playersReducer,
    loginReducer,
})

export default rootReducer;