import React from 'react';
import {Link} from 'react-router-dom';
import {Typography} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
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

export default function Nav() {
    const loginReducer = useSelector(state => state.loginReducer);

    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h1">MEGAfantasy</Typography>
            <Link to="/auction">Auction Page</Link>
            {loginReducer.email ? <p>Logged In</p>:<p>Not logged in</p>}
            <Login />
            <Logout />
        </ThemeProvider>
    )

}