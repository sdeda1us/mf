import React from 'react';
import {useSelector} from 'react-redux';
import AuctionPool from '../AuctionPool/AuctionPool';
import BidWindow from '../BidWindow/BidWindow';

export default function Auction() {
    const auctionItem = useSelector(state => state.auctionItemReducer[0]);

    return (
        <>
            {auctionItem ? <BidWindow/> : <h1>Select a team to bid on</h1>}
            <AuctionPool/>
        </>
    )
}