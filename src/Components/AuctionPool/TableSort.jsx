import React from 'react';
import {Button} from '@material-ui/core';
import {AiOutlineSortAscending, AiOutlineSortDescending} from 'react-icons/ai';
import {IconContext} from 'react-icons';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    tableSortButton: {
        maxWidth: '30px',
        minWidth: '30px',
        maxHeight: '30px',
        minHeight: '30px',
    }

}));

export default function() {
    const classes = useStyles();
    return (
        <IconContext.Provider value={{style: {width:'15px'}}}>
            <Button className={classes.tableSortButton}>
                <AiOutlineSortAscending/>
            </Button>
            <Button className={classes.tableSortButton}>
                <AiOutlineSortDescending/>
            </Button>
        </IconContext.Provider>
    )
}