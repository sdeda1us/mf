const express = require('express');
const router = express.Router();
const Pool = require('../models/pool.model');


router.get(`/:name/:direction`, (req, res) => {
    let {name, direction} = req.params;
    console.log('name and direction', name, direction);
    Pool.find({}).collation({locale: "en" }).sort({[name]: direction})
        .then(pool => {res.send(pool)})
        .catch(err => res.status(400));
});

module.exports = router;