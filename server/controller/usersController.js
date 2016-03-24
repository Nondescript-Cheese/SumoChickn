var db = require('../db');

module.exports = {
  getUserInfo: function(req, res) {
    var userId = parseInt(req.params.userID);
    db.models.User.findAll({
      where: {
        id: userId
      }
    }).then(function(data) {
      return db.models.Challenge.findAll({
        where: {
          UserId: userId
        }
      });
    }).then(function(challenges) {
      res.send(200, challenges);
    }).catch(function(err) {
      res.send(404, 'error getting info');
    })
  },
  getAllUsers: function(req, res) {
    db.models.User.findAll().then(function(data) {
      res.send(200, data);
    });
  }
};