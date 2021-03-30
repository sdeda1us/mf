import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* openBidding(action){
    try {
        yield axios.put(`/api/pool/open`, action.payload);
        yield put({type: 'FETCH_POOL'});
    }
    catch (error){
        console.log('Error with fetch request in saga', error);
    }
}

function* closeBidding(action){
    yield axios.put(`/api/pool/close`, action.payload);
    yield axios.put(`/api/players`, action.payload);
    yield put({type: 'FETCH_POOL'});
}

function* submitBid(action){
    yield axios.put(`/api/pool/submit-bid`, action.payload);
    yield put({type: 'FETCH_POOL'});
}

function* biddingSaga() {
    yield takeLatest('OPEN_BIDDING', openBidding);
    yield takeLatest('CLOSE_BIDDING', closeBidding);
    yield takeLatest('SUBMIT_BID', submitBid);
  }
  
  export default biddingSaga;