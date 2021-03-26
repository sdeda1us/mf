import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* openBidding(action){
    try {
        yield axios.put(`/api/pool`, action.payload);
        yield put({type: 'SET_AUCTION_ITEM', payload: action.payload});
    }
    catch (error){
        console.log('Error with fetch request in saga', error);
    }
}

function* biddingSaga() {
    yield takeLatest('OPEN_BIDDING', openBidding);
  }
  
  export default biddingSaga;