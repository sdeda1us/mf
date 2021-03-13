import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPlayers(){
    try {
        console.log('in fetchPlayers saga');
        const response = yield axios.get(`/api/pool`);
        yield put({type: 'SET_POOL', payload: response.data});
    }
    catch (error){
        console.log('Error with fetch request in saga', error);
    }
}

function* playersSaga() {
    yield takeLatest('FETCH_PLAYERS', fetchPlayers);
  }
  
  export default playersSaga;