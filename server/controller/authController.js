var db = require('../db');

module.exports = {
  login: function(req, res) {
    var loginUser = req.body.username;
    return db.models.User.findOrCreate({
      where: {
        username: loginUser
      }
    }).then(function(data) {
      res.send(200, data);
    }).catch(function(err) {
      res.send(404, 'error logging in');
    });
  }
};


