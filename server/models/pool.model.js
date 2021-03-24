const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const poolSchema = new Schema({
    sport: { type: String, required: true},
    teamName: {type: String, required: true},
    season: [{
        year:{type: Number},
        owned: {type: Boolean},
        active: {type: Boolean},
        value: {type: Number},
        rebate: {type: Boolean},
        highBidder: {type: String},
        nominator: {type: String},
        bidHistory: [{bid: {type: Number}}, {bidder: {type: String}}],
    }]
},
{
    timestamps: true,
});

const Pool = mongoose.model('Pool', poolSchema);

module.exports = Pool;