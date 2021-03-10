import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import {refreshTokenSetup} from '../utils/refreshToken';


const clientId = `${process.env.REACT_APP_G_CLIENT_ID}.apps.googleusercontent.com`;
export default function Login() {
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        refreshTokenSetup(res);
    };
   
    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };

    const {signIn} = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
    });

    return (
        <button onClick={signIn} className="button">
            <img src="icons/google.svg"></img>
            <span className="buttonText">Sign in with Google</span>
        </button>
    )
}