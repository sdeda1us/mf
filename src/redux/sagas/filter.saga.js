import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchFilterPool(action){
    try {
        console.log(`in fetchFilterPool saga. filtercolumn payload=${action.payload.filterColumn} filterfor payload=${action.payload.filterFor}`);
        const response = yield axios.get(`/api/pool/${action.payload.filterColumn}/${action.payload.filterFor}`);
        yield put({type: 'SET_POOL', payload: response.data});
    }
    catch (error){
        console.log('Error with fetch request in saga', error);
    }
}

function* filterSaga() {
    yield takeLatest('FETCH_FILTER_POOL', fetchFilterPool);
  }
  
  export default filterSaga;