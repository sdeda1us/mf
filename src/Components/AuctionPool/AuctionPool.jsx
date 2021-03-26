import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@material-ui/core';
import PoolDataList from './PoolDataList.jsx';

export default function AuctionPool() {
    const dispatch = useDispatch();
    const pool = useSelector(state=>state.poolReducer);
    
    useEffect(() => {
        dispatch({type: 'FETCH_POOL'})
        }, [dispatch]);

    return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableRow></TableRow>
                    <TableCell>Team</TableCell>
                    <TableCell>Sport</TableCell>
                    <TableCell>Year</TableCell>
                    <TableCell>Owned</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell>Rebate</TableCell>
                    <TableCell>Highest Bidder</TableCell>
                    <TableCell>Nominator</TableCell>
                    <TableCell>Bid History</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    {pool.map((team)=>(<PoolDataList team={team}/>))} 
            </TableBody>
            
        </Table>
        

    )

}