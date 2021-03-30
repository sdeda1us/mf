import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Login from '../Login/Login.jsx';
import Logout from '../Logout/Logout.jsx';
import {useSelector} from 'react-redux';



    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: '#111a4a',
        },
        button: {
          padding: theme.spacing(2),
          textAlign: 'center',
          border: '1px solid #111a4a',
          color: '#111a4a',
        },
        topRegion: {
            border: '3px solid #111a4a',
        }
      }));

export default function Nav() {
    const loginReducer = useSelector(state => state.loginReducer);
    const classes = useStyles();

    return (
            <Grid container justify='center' className={classes.topRegion}>
                <Grid item xs={12} className={classes.paper}><Typography variant="h1" >MEGAfantasy</Typography></Grid>
                <Link to="/"><Button className={classes.button}><Typography>Home</Typography></Button></Link>
                <Link to="/auction"><Button className={classes.button}><Typography>Auction Page</Typography></Button></Link>
                {loginReducer.email ? <Logout /> :<Login />}
            </Grid>
    )

}