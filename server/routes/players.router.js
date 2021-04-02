const express = require('express');
const router = express.Router();
const Players = require('../models/players.model');


router.get('/', (req, res) => {
    console.log('in players get route on server side');
    Players.distinct('username')
        .then(pool => {res.send(pool)})
        .catch(err => res.status(400));
})

router.post('/', (req, res) => {
    const arrayOfEmails = ['steven.maloney@gmail.com', 'liamtoohey@gmail.com', 'demedici@gmail.com', 'lowellpf@gmail.com', 'adaniller@gmail.com'];
    const {email, name} = req.body;


    arrayOfEmails.map((address)=> {
            if (address === email) {
                
                Players.updateOne(
                    {}, {'$setOnInsert': {name: name, email: email}}
                )

                    .then(() => res.sendStatus(201))
                    .catch(err => {res.sendStatus(400);
                    console.log(err.message, 'error in post')})
            }
    })
});

router.put('/', (req, res) => {
    const {email, name} = req.body.user;
    const {team} = req.body
    console.log('players router add team: ', team);
    Players.updateOne(
        {email: email}, {'$push' : {teams: team}}
    )
    .then(() => res.sendStatus(201))
        .catch(err => res.sendStatus(400));
});

module.exports = router;