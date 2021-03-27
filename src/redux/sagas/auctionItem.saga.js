import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAuctionItem(){
    try {
        const response = yield axios.get('/api/pool/auction-item');
        yield put({type: 'SET_AUCTION_ITEM', payload: response.data});
    }
    catch (error){
        console.log('Error with fetch request in saga', error);
    }
}

function* auctionItemSaga() {
    yield takeLatest('FETCH_AUCTION_ITEM', fetchAuctionItem);
}

export default auctionItemSaga;