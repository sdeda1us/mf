import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAuctionSports(){
    try {
        const response = yield axios.get('/api/pool/auction-sports');
        yield put({type: 'SET_AUCTION_SPORTS', payload: response.data});
        

    }
    catch (error){
        console.log('Error with fetch request in saga', error);
    }
}

function* auctionSaga() {
    yield takeLatest('FETCH_AUCTION_SPORTS', fetchAuctionSports);
}

export default auctionSaga;