const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    username: { type: String, required: true},
    email: {type: String, required: true},
    teams: [
        {sport: {type: String}}, {team: {type: String}}, {cost: {type: Number}}, {score: {type: Number}}, {year: {type: Number}}
    ],
    auction: [
        {year: {type: Number}},
        {lockoutAvailable: {type: Boolean}},
        {rebateAvailable: {type: Boolean}},
    ]
},
{
    timestamps: true,
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;