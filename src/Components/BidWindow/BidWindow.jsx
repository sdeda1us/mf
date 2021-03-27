import React from 'react';
import {useSelector} from 'react-redux';

export default function BidWindow() {
    const auctionItem = useSelector(state => state.auctionItemReducer[0]);

    return (
        <>
            <p>Nominated team: {auctionItem.teamName}</p>
            <p>Sport: {auctionItem.sport}</p>
            <p>Highest Bid:</p>
            <p>Bid History: </p>
            <input/>
            <button>Make Bid</button>
            <button>Pass</button>
        </>
    )
}