import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* openBidding(action){
    try {
        yield axios.put(`/api/pool`, action.payload);
        yield put({type: 'FETCH_POOL'});
    }
    catch (error){
        console.log('Error with fetch request in saga', error);
    }
}

function* biddingSaga() {
    yield takeLatest('OPEN_BIDDING', openBidding);
  }
  
  export default biddingSaga;