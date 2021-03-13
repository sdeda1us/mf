import React from 'react';
import {TableCell, TableRow} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default function PoolDataList({team}) {


    return (
        <TableRow>
            <TableCell>{team.teamName}</TableCell>
            <TableCell>{team.sport}</TableCell>
            <TableCell>{team.season.year}</TableCell>
            <TableCell>{team.season.owned ? <CheckCircleOutlineIcon style={{color:'green'}}/> : <HighlightOffIcon style={{color:'red'}}/>}</TableCell>
            <TableCell>{team.season.active ? <CheckCircleOutlineIcon style={{color:'green'}}/> : <HighlightOffIcon style={{color:'red'}}/>}</TableCell>
            <TableCell>{team.season.value}</TableCell>
            <TableCell>{team.season.rebate ? <CheckCircleOutlineIcon style={{color:'green'}}/> : <HighlightOffIcon style={{color:'red'}}/>}</TableCell>
            <TableCell>{team.season.highBidder}</TableCell>
            <TableCell>{team.season.nominator}</TableCell>
            <TableCell>{team.season.bidHistory}</TableCell>
        </TableRow>
    )

}