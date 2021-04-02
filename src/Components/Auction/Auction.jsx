import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Typography} from '@material-ui/core';
import AuctionPool from '../AuctionPool/AuctionPool';
import BidWindow from '../BidWindow/BidWindow';
import AuctionToolbar from '../AuctionToolbar/AuctionToolbar';

export default function Auction() {
    const auctionItem = useSelector(state => state.auctionItemReducer[0]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'FETCH_AUCTION_SPORTS'})
        }, [dispatch]);

   
    return (
        <>
            {auctionItem ? <BidWindow/> : <Typography variant="h3">Select a team to bid on</Typography>}
            <AuctionToolbar/>
            <AuctionPool/>
        </>
    )
}