var db = require('../db').sequelize;

//THIS DATA IS FOR TESTING PURPOSES.
//UNCOMMENT THE DATA FOR THE FUNCTIONS TO WORK.

// var challenges = [
  // {
  //   id: 1,
  //   challengeText: 'Do 45 pushups non stop',
  //   points: 4,
  //   createBy: 'Aladdin',
  //   id_user: 3,
  //   id_tribe: 1,
  //   completed: false
  // },
  // {
  //   id: 2,
  //   challengeText: "Don't get in trouble",
  //   points: 5,
  //   createBy: 'TechnoViking',
  //   id_user: 1,
  //   id_tribe: 1,
  //   completed: false
  // },
  // {
  //   id: 3,
  //   challengeText: 'Eat a cockroach from the TL floors',
  //   points: 100,
  //   createBy: 'Mike "The Professional" 2.0',
  //   id_user: 2,
  //   id_tribe: 1,
  //   completed: false
  // }
// ];

var nextId = 4;

var getNextId = function () {
  return nextId++;
};

module.exports = {
  postChallenge: function(req, res) {
    var newChallenge = req.body;
    newChallenge.id = getNextId();
    challenges.push(newChallenge);
    res.send(200, newChallenge);
  },
  updateChallengeStatus: function(req, res) {
    for(var i = 0; i < challenges.length; i++) {
      if(challenges[i].id === parseInt(req.params.id)) {
        challenges[i].completed = !challenges[i].completed;
        res.send(200, challenges[i]);
        return;
      }
    }
    res.send(404, 'challenge not found')
  }
};