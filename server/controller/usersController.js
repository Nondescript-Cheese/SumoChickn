//this will be how we require our db
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

module.exports = {
  getUserInfo: function(req, res) {
    var userId = parseInt(req.params.userID);
    for(var i = 0; i < users.length; i++) {
      if(users[i].id === userId) {
        var userFound = users[i];
        break;
      }
    }
    res.send(200,userFound);
  }
}