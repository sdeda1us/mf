const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    username: { type: String },
    email: {type: String, required: true},
    teams: [{}],
    auction: [{}]
},
{
    timestamps: true,
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;