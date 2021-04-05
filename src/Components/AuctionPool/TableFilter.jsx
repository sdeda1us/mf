import React from 'react';
import {Button, Tooltip} from '@material-ui/core';
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
        <Tooltip title={"filter"}>
            <Button className={classes.tableFilterButton}>
                <ImFilter/>
            </Button>
        </Tooltip>
    )
}