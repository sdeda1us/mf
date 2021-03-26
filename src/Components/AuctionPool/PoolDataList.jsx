import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, TableCell, TableRow} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default function PoolDataList({team}) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.loginReducer);
    const auctionItem = useSelector(state => state.auctionItemReducer[0]);
    const thisSeason = team.season[0];


    return (
        <TableRow>
            <TableCell>{auctionItem ? <p>Bid in progress</p> : <Button onClick={()=>{dispatch({type:'OPEN_BIDDING', payload: {team, user}})}}>Nominate</Button>}</TableCell>
            <TableCell>{team.teamName}</TableCell>
            <TableCell>{team.sport}</TableCell>
            <TableCell>{thisSeason.year}</TableCell>
            <TableCell>{thisSeason.owned ? <CheckCircleOutlineIcon style={{color:'green'}}/> : <HighlightOffIcon style={{color:'red'}}/>}</TableCell>
            <TableCell>
                {thisSeason.active || thisSeason.ownend ? 
                    <CheckCircleOutlineIcon style={{color:'green'}}/> : 
                    <HighlightOffIcon style={{color:'red'}}/>
                }
                <Button onClick={()=>{dispatch({type:'OPEN_BIDDING', payload: {team, user}})}}>Nominate</Button>
            </TableCell>
            <TableCell>{thisSeason.value}</TableCell>
            <TableCell>{thisSeason.rebate ? <CheckCircleOutlineIcon style={{color:'green'}}/> : <HighlightOffIcon style={{color:'red'}}/>}</TableCell>
            <TableCell>{thisSeason.highBidder}</TableCell>
            <TableCell>{thisSeason.nominator}</TableCell>
            <TableCell>{thisSeason.bidHistory.map(bid => (<>{bid.bidder} {bid.bid}</>))}</TableCell>
        </TableRow>
    )

}