const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema(
	{
        team: {type: String},
        player: {type: String},
        game1: {type: Number},
        game2: {type: Number},
        game3: {type: Number},
        game4: {type: Number},
        total_score: {type:Number}
	},

    {
        timestamps: true
    }
)


const Player = mongoose.model("players", TeamSchema);
module.exports = Player;
