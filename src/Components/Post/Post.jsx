import React from 'react';
import {useDispatch} from 'react-redux';

export default function Post() {
    const dispatch = useDispatch();
    const addGolfers = () => {
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        for (let letter of alphabet){
            let golfTeam = {
                teamName: letter,
                sport: 'golf',
                year: 2021,
                owned: false,
                active: false,
                value: 0,
                rebate: false, 
                highBidder: 'none',
                nominator: 'none'
            }
            console.log(golfTeam);
            dispatch({type: 'POST_TEAM', payload: {golfTeam}});
        }
    }

    return (
        <div>
            <button onClick={() => addGolfers()}>Add Golf Letters</button>
        </div>
    )

}
