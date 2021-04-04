import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Grid, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import PoolDataList from './PoolDataList.jsx';
import TableTools from './TableTools';
import {makeStyles} from "@material-ui/styles";
import TableSort from "./TableSort";
import TableFilter from "./TableFilter";

const useStyles = makeStyles((theme) => ({
    headerRow: {
        backgroundColor: 'black',
    },
    headerCell: {
        textAlign: 'left',
        color: 'white',
    }

}));


export default function AuctionPool() {
    const dispatch = useDispatch();
    const pool = useSelector(state=>state.poolReducer);
    const classes = useStyles();
    
    useEffect(() => {
        dispatch({type: 'FETCH_POOL'})
        }, [dispatch]);

    const headerNames = [
        {name:'', sort: false, filter: false},
        {name:'Team', sort: true, filter: false},
        {name: 'Sport', sort: true, filter: true},
        {name: 'Year', sort: false, filter: false},
        {name: 'Owned', sort: true, filter: true},
        {name: 'Value', sort: true, filter: false},
        {name: 'Rebate', sort: true, filter: true},
        {name: 'Highest Bidder', sort: true, filter: true}
    ]
    return(
        <Table>
            <TableHead>
                <TableRow className={classes.headerRow}>
                    {headerNames.map((cell)=>(
                        <TableCell key={cell.name} className={classes.headerCell}>
                            {cell.name}
                        </TableCell>
                    ))}
                </TableRow>
                <TableTools headerNames={headerNames}/>
            </TableHead>
            <TableBody>
                    {pool.map((team)=>(<PoolDataList  team={team}/>))}
            </TableBody>
            
        </Table>
        

    )

}