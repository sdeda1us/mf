import { all } from 'redux-saga/effects';
import poolSaga from './pool.saga';
import playersSaga from './players.saga';
import biddingSaga from './bidding.saga';


export default function* rootSaga() {
    console.log('made it to root saga');
    yield all([
        biddingSaga(),
        poolSaga(),
        playersSaga(),
    ]);
}