import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, TableCell, TableRow} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default function PoolDataList({team}) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.loginReducer);


    return (
        <TableRow>
            <TableCell>{team.teamName}</TableCell>
            <TableCell>{team.sport}</TableCell>
            <TableCell>{team.season.year}</TableCell>
            <TableCell>{team.season.owned ? <CheckCircleOutlineIcon style={{color:'green'}}/> : <HighlightOffIcon style={{color:'red'}}/>}</TableCell>
            <TableCell>
                {team.season.active ? 
                    <CheckCircleOutlineIcon style={{color:'green'}}/> : 
                    <HighlightOffIcon style={{color:'red'}}/>
                }
                <Button onClick={()=>{dispatch({type:'OPEN_BIDDING', payload: {team, user}})}}>Nominate</Button>
            </TableCell>
            <TableCell>{team.season.value}</TableCell>
            <TableCell>{team.season.rebate ? <CheckCircleOutlineIcon style={{color:'green'}}/> : <HighlightOffIcon style={{color:'red'}}/>}</TableCell>
            <TableCell>{team.season.highBidder}</TableCell>
            <TableCell>{team.season.nominator}</TableCell>
            <TableCell>{team.season.bidHistory}</TableCell>
        </TableRow>
    )

}