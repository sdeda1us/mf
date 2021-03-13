import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function RouteTest() {
    const dispatch = useDispatch();
    const pool = useSelector(state=>state.poolReducer);
    
    useEffect(() => {
        dispatch({type: 'FETCH_POOL'})
        }, [dispatch]);

    const getPool = () => {
        dispatch({type: 'FETCH_POOL'});
    }

    return(
        <div>
            <p>Click for list of data</p>
            <button onClick={() => getPool()}>CLICK</button>
            {pool.map((i)=>(<p>{i.teamName}</p>))}
        </div>
        

    )

}