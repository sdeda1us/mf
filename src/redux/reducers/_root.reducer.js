import { combineReducers } from 'redux';
import pool from './pool.reducer';

const rootReducer = combineReducers({
    pool,

})

export default rootReducer;