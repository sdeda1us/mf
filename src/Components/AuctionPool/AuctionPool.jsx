import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import PoolDataList from './PoolDataList.jsx';
import TableTools from './TableTools';


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
                    <TableCell></TableCell>
                    <TableCell>Team</TableCell>
                    <TableCell>Sport</TableCell>
                    <TableCell>Year</TableCell>
                    <TableCell>Owned</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell>Rebate</TableCell>
                    <TableCell>Highest Bidder</TableCell>
                    
                </TableRow>
                <TableTools/>
            </TableHead>
            <TableBody>
                    {pool.map((team)=>(<PoolDataList  team={team}/>))}
            </TableBody>
            
        </Table>
        

    )

}