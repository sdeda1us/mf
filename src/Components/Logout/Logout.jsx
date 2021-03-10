import React from 'react';
import {useGoogleLogout} from 'react-google-login';

const clientId = `${process.env.REACT_APP_G_CLIENT_ID}.apps.googleusercontent.com`;

export default function Logout() {
    const onLogoutSuccess = (res) => {
        alert('Logged out successfully');
    };

    const onFailure = () => {
        console.log('Handle failure cases');
    };

    const {signOut} = useGoogleLogout({
       clientId,
       onLogoutSuccess,
       onFailure, 
    });

    return (
        <button onClick={signOut} className="button">
            <img src="icons/google.svg" alt="google login" className="icon"/>
            <span className = "buttonText">Sign Out</span>
        </button>
    )

}