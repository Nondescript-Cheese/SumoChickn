var auth = require('./authController.js');
var users = require('./usersController.js');
var challenges = require('./challengesController.js');

module.exports = {
  auth: auth,
  users: users,
  challenges: challenges
};