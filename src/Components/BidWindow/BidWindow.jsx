import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button, FormControl, Grid, InputAdornment, TextField, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    greenButton: {
      textAlign: 'center',
      border: '1px solid green',
      backgroundColor: 'green',
      color: 'white',
    },
    redButton: {
        textAlign: 'center',
        border: '1px solid red',
        backgroundColor: 'red',
        color: 'white',
      },
      bidBox: {
          backgroundColor: '#111a4a',
          color: 'white',
      },
      bidInput: {
          width: '7%',
      }
  }));

export default function BidWindow() {
    const dispatch = useDispatch();
    const auctionItem = useSelector(state => state.auctionItemReducer[0]);
    const auctionSeason = useSelector(state => state.auctionSeasonReducer);
    const user = useSelector(state => state.loginReducer);
    const classes = useStyles();
    

    return (
        <>
        <Grid container justify = 'center' className={classes.bidBox}>
            <Grid item xs={6}>
                <Typography variant="h5">
                    Nominated team: {auctionItem.teamName}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h5">
                    Sport: {auctionItem.sport}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h5">
                    Highest Bid: {auctionSeason.value}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h5">
                    High Bidder: {auctionSeason.highBidder}
                </Typography>
            </Grid>
        </Grid>
        <Grid container>
            <FormControl className={classes.bidInput}>
                <TextField 
                    variant="filled"
                    label = "enter bid"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      }}
                />
                        
                
            </FormControl>
            
            <Button className={classes.greenButton}>Make Bid</Button>
            <Button className={classes.redButton}>Pass</Button>
            <Button 
                onClick={()=>
                    {dispatch({type: 'CLOSE_BIDDING', payload: {team: auctionItem, user}})}}
            >
                Close bidding(testing only)
            </Button>
        </Grid>
            <Typography>Bid History: </Typography>
        </> 
    )
}