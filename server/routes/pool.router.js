const express = require('express');
const router = express.Router();
const Pool = require('../models/pool.model');

router.get('/', (req, res) => {
    Pool.find()
        .then(pool => res.json(pool))
        .catch(err => res.status(400));
});


module.exports = router;