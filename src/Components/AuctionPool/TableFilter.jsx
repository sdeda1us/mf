import React from 'react';
import {Button} from '@material-ui/core';
import {ImFilter} from 'react-icons/im';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    tableFilterButton: {
        maxWidth: '30px',
        minWidth: '30px',
        maxHeight: '30px',
        minHeight: '30px',
    }
}));

export default function TableFilter() {
    const classes = useStyles();

    return (
        <Button className={classes.tableFilterButton}>
            <ImFilter/>
        </Button>
    )
}