import React from 'react';
import {useDispatch} from 'react-redux';
import {Button, Tooltip} from '@material-ui/core';
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

export default function TableSort({name}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <IconContext.Provider value={{style: {width:'15px'}}}>
            <Tooltip title="sort ascending">
                <Button
                    className={classes.tableSortButton}
                    onClick={()=>{dispatch({type:'SORT_COLUMN', payload: {name: name, direction: 1}})}}
                >
                    <AiOutlineSortAscending/>
                </Button>
            </Tooltip>
            <Tooltip title={"sort descending"}>
                <Button
                    className={classes.tableSortButton}
                    onClick={()=>{dispatch({type:'SORT_COLUMN', payload: {name: name, direction: -1}})}}
                >
                    <AiOutlineSortDescending/>
                </Button>
            </Tooltip>
        </IconContext.Provider>
    )
}