import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* sortColumn(action){
    const response = yield axios.get(`/api/sort/${action.payload.name}/${action.payload.direction}`);
    yield put({type: 'SET_POOL', payload: response.data});
}

function* sortSaga() {
    yield takeLatest('SORT_COLUMN', sortColumn);
}

export default sortSaga;