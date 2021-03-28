import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPool(){
    const response = yield axios.get('/api/pool/');
    yield put({type: 'SET_POOL', payload: response.data});
    yield put({type: 'FETCH_AUCTION_ITEM'});
}

function* checkLogin(action){
    yield axios.post('/api/players/', action.payload);
    yield put({type: 'SET_LOGIN', payload: action.payload});
}

function* loginSaga() {
    yield takeLatest('CHECK_LOGIN', checkLogin);
}

export default loginSaga;