import React from 'react';
import {useDispatch} from 'react-redux';
import {Button} from '@material-ui/core';

export default function Post() {
    const dispatch = useDispatch();
    const golfList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const mlbList = ['Arizona Diamondbacks','Atlanta Braves','Baltimore Orioles','Boston Red Sox','Chicago White Sox','Chicago Cubs','Cincinnati Reds',
        'Cleveland Indians','Colorado Rockies','Detroit Tigers','Houston Astros','Kansas City Royals','Los Angeles Angels','Los Angeles Dodgers',
        'Miami Marlins','Milwaukee Brewers','Minnesota Twins','New York Yankees','New York Mets','Oakland Athletics','Philadelphia Phillies','Pittsburgh Pirates',
        'San Diego Padres','San Francisco Giants','Seattle Mariners','St. Louis Cardinals','Tampa Bay Rays','Texas Rangers','Toronto Blue Jays','Washington Nationals'
    ]
   

    const addTeams = (sport, sportList) => {
        for (let team of sportList){
            let addedTeam = {
                teamName: team,
                sport: sport,
                year: 2021,
                owned: false,
                active: false,
                value: 0,
                rebate: false, 
                highBidder: 'none',
                nominator: 'none'
            }
        console.log(addedTeam);
        dispatch({type: 'POST_TEAM', payload: {addedTeam}});
        }
    }

    return (
        <div>
            <Button onClick={()=>{addTeams('golf', golfList)}} style={{color:'blue'}}>Add golf teams</Button>
            <Button onClick={()=>{addTeams('mlb', mlbList)}} style={{color:'blue'}}>Add mlb teams</Button>
        </div>
    )

}
