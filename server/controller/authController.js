// var db = require('../db').sequelize;

//THIS DATA IS FOR TESTING PURPOSES. 
//UNCOMMENT THE DATA FOR THE FUNCTIONS TO WORK.

// var users = [
//   {
//     id: 1,
//     username: 'Mike "The Professional" 2.0',
//     born: 1993,
//     died: 2522,
//     beastPoints: 500,
//     wussPoints: 0,
//     availableChallenges: 1
//   },
//   {
//     id: 2,
//     username: 'Aladdin',
//     born: 1991,
//     died: 1992,
//     beastPoints: 100,
//     wussPoints: 0,
//     availableChallenges: 1
//   },
//   {
//     id: 3,
//     username: 'TechnoViking',
//     born: 1989,
//     died: 1990,
//     beastPoints: 100,
//     wussPoints: 0,
//     availableChallenges: 1
//   }
// ];

var nextId = 4;

var getNextId = function () {
  return nextId++;
};

module.exports = {
  login: function(req, res) {
    var username = req.body;
    for(var i = 0; i < users.length; i++) {
      if(users[i].username === username.username) {
        //do some type of login and redirect with that username
        res.send(200,  users[i]);
        return;
      }
    }
    //otherwise create the new user
    username.id = getNextId();
    users.push(username);
    res.send(200, username);
  }
};