import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Grid, Typography} from '@material-ui/core';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Login from '../Login/Login.jsx';
import Logout from '../Logout/Logout.jsx';
import {useSelector} from 'react-redux';

//defining custom fonts
const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Notable',
      ].join(','),
    },});

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: '#00004d',
        },
        button: {
          padding: theme.spacing(2),
          textAlign: 'center',
          border: '1px solid #00004d',
          color: '#00004d',
        }
      }));

export default function Nav() {
    const loginReducer = useSelector(state => state.loginReducer);
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Grid container justify='center'>
                <Grid item xs={12} className={classes.paper}><Typography variant="h1">MEGAfantasy</Typography></Grid>
                <Link to="/"><Button className={classes.button}><Typography>Home</Typography></Button></Link>
                <Link to="/auction"><Button className={classes.button}><Typography>Auction Page</Typography></Button></Link>
                {loginReducer.email ? <Logout /> :<Login />}
            </Grid>
            
        </ThemeProvider>
    )

}