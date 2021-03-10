import { all } from 'redux-saga/effects';
import poolSaga from './pool.saga';

export default function* rootSaga() {
    yield all([
        poolSaga,
    ]);
}