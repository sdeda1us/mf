import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPool(){
    try {
        const response = yield axios.get(`/api/pool`);
        yield put({type: 'SET_POOL', payload: response.data});
    }
    catch (error){
        console.log('Error with fetch request in saga', error);
    }
}

function* poolSaga() {
    yield takeLatest('FETCH_POOL', fetchPool);
    
  }
  
  export default poolSaga;