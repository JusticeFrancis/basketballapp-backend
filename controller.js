const Player = require("./model");
const mongoose = require("mongoose");

async function uploadScore(req, res) {
  const { team, players } = req.body;
  console.log(players);
  try {
    for (let index = 0; index < players.length; index++) {
      const item = players[index];
      const score = new Player({
        team,
        player: item.player,
        game1: item.game1,
        game2: item.game2,
        game3: item.game3,
        game4: item.game4,
        total_score: Number(item.game1) + Number(item.game2) + Number(item.game3) + Number(item.game4),
      });
      await score.save();
      console.log(score);
    }

    return res.json({
      success: true,
    });
  } catch (error) {
    return res.json({
      success: false,
      msg: "An error occured",
    });
  }
}

async function getScores(req, res) {
  try {
    const scores = await Player.find().sort({ total_score: -1 });
    return res.json({
      success: true,
      scores,
    });
  } catch (error) {
    return res.json({
      success: false,
      msg: "An error occured",
    });
  }
}



async function deleteScores(req, res) {
    try {
      await Player.deleteMany()
      return res.json({
        success: true,
      });
    } catch (error) {
      return res.json({
        success: false,
        msg: "An error occured",
      });
    }
  }

module.exports = {
  uploadScore,
  getScores,
  deleteScores
};
