import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Grid, MenuItem, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles'
// import FilterBy from './FilterBy';

const useStyles = makeStyles((theme) => ({
    blueButton: {
      textAlign: 'center',
      border: '1px solid blue',
      backgroundColor: 'blue',
      color: 'white',
    },
    redButton: {
        textAlign: 'center',
        border: '1px solid red',
        backgroundColor: 'red',
        color: 'white',
      },
  }));

  const filterColumns = 
  [
      {
          "value": "none",
          "label": "None"
      },
      {
            "value": "sport",
            "label": "Sport"
        },
        {
            "value": "owned",
            "label": "Owned"
        },
        {
            "value": "rebate",
            "label": "Rebate"
        },
        {
            "value": "highestBidder",
            "label": "Highest Bidder"
        }  
];

  

export default function AuctionToolbar() {
    const classes= useStyles();
    const dispatch = useDispatch();
    const [filterColumn, setFilterColumn] = useState('none');
    const [filterFor, setFilterFor] = useState('');
    const playersList = useSelector(state => state.playersReducer);
    const auctionSports = useSelector(state => state.auctionSportsReducer);

    return (
        <Grid container>
            <TextField
                select
                label="Filter by"
                value={filterColumn}
                onChange={(event)=>{setFilterColumn(event.target.value)}}
            >
                {filterColumns.map((option)=> (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                select
                label="Filter for"
                value={filterFor}
                onChange={(event)=>{setFilterFor(event.target.value)}}
            >
                {filterColumn === 'none' ? <MenuItem value = 'none'>None</MenuItem> : 
                    filterColumn === 'owned' || filterColumn === 'rebate' ?
                        <>
                            <MenuItem value={true}>Yes</MenuItem>
                            <MenuItem value={false}>No</MenuItem> 
                        </>:
                    filterColumn === 'highestBidder' ?
                        playersList.map((player)=> (
                            <MenuItem key={player} value={player}>
                                {player}
                            </MenuItem>
                        )) :
                    auctionSports.map((sport) => (
                        <MenuItem key={sport} value={sport}>{sport}</MenuItem>
                    ))
                }
            </TextField>
            <Button 
                className={classes.blueButton}
                onClick={() => {dispatch({type: 'FETCH_FILTER_POOL', payload: {filterColumn: filterColumn, filterFor: filterFor }})}}
            >
                Filter
            </Button>
        </Grid>
    )
}