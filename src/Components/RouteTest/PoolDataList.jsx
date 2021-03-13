import React from 'react';
import {TableCell, TableRow} from '@material-ui/core';

export default function PoolDataList({team}) {


    return (
        <TableRow>
            <TableCell>{team.teamName}</TableCell>
            <TableCell>{team.sport}</TableCell>
            <TableCell>{team.season.year}</TableCell>
            <TableCell>{team.season.owned}</TableCell>
            <TableCell>{team.season.active}</TableCell>
            <TableCell>{team.season.value}</TableCell>
            <TableCell>{team.season.rebate}</TableCell>
            <TableCell>{team.season.highBidder}</TableCell>
            <TableCell>{team.season.nominator}</TableCell>
            <TableCell>{team.season.bidHistory}</TableCell>
        </TableRow>
    )

}