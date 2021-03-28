const express = require('express');
const router = express.Router();
const Pool = require('../models/pool.model');

router.get('/', (req, res) => {
    console.log('in pool get route on server side');
    Pool.find()
        .then(pool => {res.send(pool)})
        .catch(err => res.status(400));
});

router.get('/auction-item', (req, res) => {
    console.log('getting auction item in pool router');
    Pool.find({'season.active': true})
        .then(pool => {res.send(pool)})
        .catch(err => res.status(400));
});

router.post('/', (req, res) => {
    const {teamName, sport, year, owned, active, value, rebate, highBidder, nominator} = req.body.addedTeam

    const newPool = new Pool({
        sport,
        teamName,
        season: {
            year,
            owned,
            active,
            value,
            rebate,
            highBidder,
            nominator,
        },
    });

    newPool.save()
        .then(() => res.sendStatus(201))
        .catch(err => res.sendStatus(400));
    
})

router.put('/open', (req,res) => {
    const {team, user} = req.body;
    console.log(user.name, team.teamName);
    Pool.updateOne(
        {'sport': team.sport, 'teamName': team.teamName, 'season.year': 2021}, 
        {'$set' : {
            'season.active': true,
            'season.value': .25, 
            'season.nominator': user.name, 
            'season.highBidder': user.name
        },
         '$push' : {'season.bidHistory': {'bid': .25, 'bidder': user.name}}
        }
    )
        .then(() => res.sendStatus(201))
        .catch(err => res.sendStatus(400));
})

router.put('/close', (req,res) => {
    const {team, user} = req.body;
    console.log(user.name, team.teamName);
    Pool.updateOne(
        {'sport': team.sport, 'teamName': team.teamName, 'season.year': 2021},
        {'$set' : {
                'season.active': false,
                'season.owned': true,
            }
        }
    )
        .then(() => res.sendStatus(201))
        .catch(err => res.sendStatus(400));
})

module.exports = router;