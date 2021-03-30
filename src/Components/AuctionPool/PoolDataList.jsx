import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, TableCell, TableRow} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    greenButton: {
      textAlign: 'center',
      border: '1px solid green',
      color: 'green',
    }
  }));

export default function PoolDataList({team}) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.loginReducer);
    const auctionItem = useSelector(state => state.auctionItemReducer[0]);
    const thisSeason = team.season[0];
    const classes = useStyles();

    return (
        <TableRow>
            <TableCell>{auctionItem ? <p>Bid in progress</p> :
                thisSeason.owned ? <HighlightOffIcon style={{color:'red'}}/> :
                    <Button className = {classes.greenButton} onClick={()=>{dispatch({type:'OPEN_BIDDING', payload: {team, user}})}}>Nominate</Button>}
            </TableCell>
            <TableCell>{team.teamName}</TableCell>
            <TableCell>{team.sport}</TableCell>
            <TableCell>{thisSeason.year}</TableCell>
            <TableCell>{thisSeason.owned ? <CheckCircleOutlineIcon style={{color:'green'}}/> : <HighlightOffIcon style={{color:'red'}}/>}</TableCell>

            <TableCell>{thisSeason.value}</TableCell>
            <TableCell>{thisSeason.rebate ? <CheckCircleOutlineIcon style={{color:'green'}}/> : <HighlightOffIcon style={{color:'red'}}/>}</TableCell>
            <TableCell>{thisSeason.highBidder}</TableCell>
            
        </TableRow>
    )

}