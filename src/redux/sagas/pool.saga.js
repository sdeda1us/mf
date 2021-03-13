import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPool(){
        console.log('in fetchPool saga');
        const response = yield axios.get('/api/pool/');
        yield put({type: 'SET_POOL', payload: response.data});
   
}

function* poolSaga() {
    yield takeLatest('FETCH_POOL', fetchPool);
  }
  
  export default poolSaga;