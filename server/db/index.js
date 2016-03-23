var Sequelize = require('sequelize');

var db = new Sequelize('challengr', 'root', 'password');

var User = db.define('User', {
  username: {type:Sequelize.STRING, unique: true},
  beastPoints: {type: Sequelize.INTEGER, defaultValue: 0},
  wussPoints: {type: Sequelize.INTEGER, defaultValue: 0},
  availableChallenges: {type: Sequelize.INTEGER, defaultValue: 1}
}, {
  timestamps: false
});

var Challenge = db.define('Challenge', {
  challengeText: Sequelize.STRING,
  points: Sequelize.INTEGER,
  createdBy: Sequelize.STRING,
  completed: {type: Sequelize.BOOLEAN, defaultValue: false},
  userChallenged: Sequelize.STRING
}, {
  timestamps: false
});

var Tribe = db.define('Tribe', {
  tribeName: {type: Sequelize.STRING, unique: true}
}, {
  timestamps: false
});

Challenge.belongsTo(Tribe);
Challenge.belongsTo(User);
// Declares the join table that creates a relationship between a USER and a CHALLENGE
Tribe.belongsToMany(User, {through: 'UserTribe', timestamps: false});
User.belongsToMany(Tribe, {through: 'UserTribe', timestamps: false});

module.exports = db;