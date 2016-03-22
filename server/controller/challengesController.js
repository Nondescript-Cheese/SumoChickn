var db = require('../db')

module.exports = {
  postChallenge: function(req, res) {
    var challenge = req.body;
    db.models.User.find({
      where: {
        username: challenge.userChallenged
      }
    }).then(function(data) {
      return db.models.Challenge.create({
        challengeText: challenge.text,
        points: challenge.points,
        createdBy: challenge.creator,
        userChallenged: challenge.userChallenged,
        UserId: data.id
      });
    }).then(function(data) {
      res.send(200, data);
    }).catch(function(err) {
      res.send(404, 'error');
    });
  },
  updateChallengeStatus: function(req, res) {
    var challengeId = parseInt(req.params.id);
    db.models.Challenge.find({
      where: {
        id: challengeId
      }
    }).then(function(data) {
      return data.updateAttributes({
        completed: !data.completed
      });
    }).then(function(result) {
      res.send(200, result);
    }).catch(function(err) {
      res.send(404, 'error');
    });
  }
};

