import React from 'react';
import {Grid, TableRow, TableCell} from '@material-ui/core';
import TableSort from './TableSort';
import TableFilter from './TableFilter';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    toolRow: {
        backgroundColor: 'lightgray',
    },
    headerCell: {
        textAlign: 'left',
        color: 'black',
    }

}));

export default function TableTools({headerNames}) {
    const classes = useStyles();

    return (
        <TableRow className={classes.toolRow}>
            {headerNames.map((n)=>(
                <TableCell>
                    {n.sort ? <TableSort name={n.searchTerm}/> : <></>}
                    {n.filter ? <TableFilter/> : <></>}
                </TableCell>))}
        </TableRow>

    )
}