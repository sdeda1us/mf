import React from 'react';
import {useSelector} from 'react-redux';
import {Typography} from '@material-ui/core';
import AuctionPool from '../AuctionPool/AuctionPool';
import BidWindow from '../BidWindow/BidWindow';

export default function Auction() {
    const auctionItem = useSelector(state => state.auctionItemReducer[0]);

    return (
        <>
            {auctionItem ? <BidWindow/> : <Typography variant="h3">Select a team to bid on</Typography>}
            <AuctionPool/>
        </>
    )
}