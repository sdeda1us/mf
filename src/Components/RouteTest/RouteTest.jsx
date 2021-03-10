import React from 'react';
import {useEffect, useDispatch} from 'react-redux';

export default function RouteTest() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'FETCH_POOL'})
        }, [dispatch]);

    return(
        <p>Hi from RouteTest</p>
    )

}