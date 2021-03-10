import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function RouteTest() {
    const dispatch = useDispatch();
    const pool = useSelector(state=>state.pool);
    
    useEffect(() => {
        dispatch({type: 'FETCH_POOL'})
        }, [dispatch]);

    return(
        <p>Hi from RouteTest</p>
    )

}