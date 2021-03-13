const express = require('express');
const router = express.Router();
const Pool = require('../models/pool.model');

router.get('/', (req, res) => {
    console.log('in pool get route on server side');
    Pool.find()
        .then(pool => {res.send(pool)})
        .catch(err => res.status(400));
});

router.post('/', (req, res) => {
    const sport = req.body.sport;
    const teamName = req.body.teamName;
    const year = req.body.year;
    const owned = req.body.owned;
    const active = req.body.active;
    const value = req.body.value;
    const rebate = req.body.rebate;

    const newPool = new Pool({
        sport,
        teamName,
        season: {
            year,
            owned,
            active,
            value,
            rebate
        },
    });

    newPool.save()
        .then(() => res.sendStatus(201))
        .catch(err => res.sendStatus(400));
    
})

module.exports = router;