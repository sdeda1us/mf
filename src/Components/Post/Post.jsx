import React from 'react';
import {useDispatch} from 'react-redux';
// import {Button} from '@material-ui/core';

export default function Post() {
    const dispatch = useDispatch();
    // const golfList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // const mlbList = ['Arizona Diamondbacks','Atlanta Braves','Baltimore Orioles','Boston Red Sox','Chicago White Sox','Chicago Cubs','Cincinnati Reds',
    //     'Cleveland Indians','Colorado Rockies','Detroit Tigers','Houston Astros','Kansas City Royals','Los Angeles Angels','Los Angeles Dodgers',
    //     'Miami Marlins','Milwaukee Brewers','Minnesota Twins','New York Yankees','New York Mets','Oakland Athletics','Philadelphia Phillies','Pittsburgh Pirates',
    //     'San Diego Padres','San Francisco Giants','Seattle Mariners','St. Louis Cardinals','Tampa Bay Rays','Texas Rangers','Toronto Blue Jays','Washington Nationals'
    // ]
    // const iplList = ['Chennai Super Kings', 'Delhi Capitals', 'Punjab Kings', 'Kolkata Knight Riders', 'Mumbai Indians', 'Rajasthan Royals', 'Royal Challengers Bangalore', 'Sunrisers Hyderabad'];
    // const mensTennisList = ['Austria', 'Argentina','Australia', 'Belarus', 'Belgium', 'Bolivia', 'Bosnia and Herzegovina', 'Brazil','Bulgaria','Canada', 'Colombia', 'Chile', 'Croatia', 'Czech Republic', 'Denmark', 'Egypt', 'Finalnd', 'France', 'Georgia', 'Germany','Greece','Hungary', 'India', 'Italy','Japan', 'Kazakhstan', 'Lithuania', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia','Serbia', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain','Sweden', 'Switzerland','Taiwan', 'Ukraine', 'United States', 'Uruguay'];
    // const womensTennisList = ['Argentina','Australia', 'Belarus', 'Belgium', 'Bulgaria', 'Canada', 'China', 'Croatia', 'Czech Republic', 'Egypt', 'Estonia', 'France', 'Georgia', 'Germany','Greece','Hungary', 'Italy','Japan', 'Kazakhstan', 'Latvia', 'Lithuania', 'Montenegro', 'Netherlands', 'Norway', 'Puerto Rico', 'Poland', 'Portugal', 'Romania', 'Russia','Serbia', 'Slovakia', 'Slovenia', 'Spain','Sweden', 'Switzerland', 'Taiwan', 'Tunisia', 'Ukraine', 'United Kingdom', 'United States'];
    // const tdfList = ['UAE Team Emirates', 'Ineos Grenadiers', 'Team Jumbo', 'Bora–Hansgrohe', 'AG2R La Mondiale-Citroën', 'Deceuninck – Quick-Step', 'Groupama–FDJ', 'Bahrain Victorious', 'EF Education-Nippo', 'Arkéa-Samsic', 'Movistar Team', 'Trek–Segafredo', 'Intermarché-Wanty Gobert Matériaux', 'Cofidis', 'Astana-Premier Tech', 'Lotto-Soudal', 'Mitchelton–Scott', 'Israel Start-Up Nation', 'Total Direct Energie', 'Team Qhubeka-Assos', 'Team DSM', 'B&B Hotels – Vital Concept', 'Alpecin-Fenix'];

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
            {/* Data for commented out buttons already entered but left in code for adding temas for next season */}
            {/* <Button onClick={()=>{addTeams('golf', golfList)}} style={{color:'blue'}}>Add golf teams</Button>
            <Button onClick={()=>{addTeams('mlb', mlbList)}} style={{color:'blue'}}>Add mlb teams</Button> */}
            {/* <Button onClick={()=>{addTeams('ipl', iplList)}} style={{color:'blue'}}>Add ipl teams</Button> */}
            {/* <Button onClick={()=>{addTeams('mensTennis', mensTennisList)}} style={{color:'blue'}}>Add mens tennis countries</Button> */}
            {/* <Button onClick={()=>{addTeams('Womens Tennis', womensTennisList)}} style={{color:'blue'}}>Add womens tennis countries</Button> */}
            {/* <Button onClick={()=>{addTeams('Tour de France', tdfList)}} style={{color:'blue'}}>Add tour de france teams</Button> */}
        </div>
    )

}
