import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function BidWindow() {
    const dispatch = useDispatch();
    const auctionItem = useSelector(state => state.auctionItemReducer[0]);
    const user = useSelector(state => state.loginReducer);

    return (
        <>
            <p>Nominated team: {auctionItem.teamName}</p>
            <p>Sport: {auctionItem.sport}</p>
            <p>Highest Bid:</p>
            <p>Bid History: </p>
            <input/>
            <button>Make Bid</button>
            <button>Pass</button>
            <button onClick={()=>{dispatch({type: 'CLOSE_BIDDING', payload: {team: auctionItem, user}})}}>Close bidding(testing only)</button>
        </>
    )
}