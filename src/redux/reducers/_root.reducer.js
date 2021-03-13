import { combineReducers } from 'redux';
import poolReducer from './pool.reducer';
import playersReducer from './players.reducer';

const rootReducer = combineReducers({
    poolReducer,
    playersReducer,
})

export default rootReducer;