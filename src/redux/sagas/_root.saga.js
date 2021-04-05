import { all } from 'redux-saga/effects';
import poolSaga from './pool.saga';
import playersSaga from './players.saga';
import biddingSaga from './bidding.saga';
import auctionItemSaga from "./auctionItem.saga";
import loginSaga from './login.saga';
import auctionSaga from './auction.saga';
import filterSaga from './filter.saga';
import sortSaga from './sort.saga';

export default function* rootSaga() {
    console.log('made it to root saga');
    yield all([
        sortSaga(),
        filterSaga(),
        auctionSaga(),
        loginSaga(),
        auctionItemSaga(),
        biddingSaga(),
        poolSaga(),
        playersSaga(),
    ]);
}