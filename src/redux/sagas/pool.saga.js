import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPool(){
        const response = yield axios.get('/api/pool/');
        yield put({type: 'SET_POOL', payload: response.data});
        yield put({type: 'FETCH_AUCTION_ITEM'});
}

function* postTeam(action){
    yield axios.post('/api/pool/', action.payload);
}

function* poolSaga() {
    yield takeLatest('FETCH_POOL', fetchPool);
    yield takeLatest('POST_TEAM', postTeam);
  }
  
  export default poolSaga;