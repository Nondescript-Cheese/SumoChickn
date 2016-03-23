var db = require('../db');

module.exports = {
  getUserInfo: function(req, res) {
    var results = [];
    var userId = parseInt(req.params.userID);
    console.log('USERID-------------->', userId);
    db.models.User.findAll({
      where: {
        id: userId
      }
    }).then(function(data) {
      results = results.concat(data);
      return db.models.Challenge.findAll({
        where: {
          UserId: userId
        }
      });
    }).then(function(challenges) {
      results = results.concat(challenges);
      res.send(200, results);
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