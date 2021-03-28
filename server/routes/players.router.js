const express = require('express');
const router = express.Router();
const Players = require('../models/players.model');


router.post('/', (req, res) => {
    const arrayOfEmails = ['steven.maloney@gmail.com', 'liamtoohey@gmail.com', 'demedici@gmail.com', 'lowellpf@gmail.com', 'adaniller@gmail.com'];
    const {email, name} = req.body;


    arrayOfEmails.map((address)=> {
            if (address === email) {
                const newPlayers = new Players({
                    username: name,
                    email: email,
                })
                newPlayers.save()
                    .then(() => res.sendStatus(201))
                    .catch(err => res.sendStatus(400));
            }
    })
});

module.exports = router;