import React from 'react';
import {Grid, TableRow, TableCell} from '@material-ui/core';
import TableSort from './TableSort';
import TableFilter from './TableFilter';

export default function TableTools() {

    return (
        <TableRow>
            <TableCell></TableCell>
            <TableCell>
               <Grid container><TableSort/></Grid>
            </TableCell>
            <TableCell>
                <Grid container>
                    <TableSort/>
                    <TableFilter/>
                </Grid>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
                <TableSort/>
                <TableFilter/>
            </TableCell>
            <TableCell>
                <TableSort/>
            </TableCell>
            <TableCell>
                <TableSort/>
                <TableFilter/>
            </TableCell>
            <TableCell>
                <TableSort/>
                <TableFilter/>
            </TableCell>
        </TableRow>
    )
}