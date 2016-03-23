var controller = require('./controller');
var router = require('express').Router();

//not sure if we need this here. This is supposed to render the homepage
//of the app when the endpoint is /.
  // router.get('/', function(req, res) {
  //   res.render('index');
  // });

router.get('/getInitialData/:userID', controller.users.getUserInfo);

router.get('/getAllUsers', controller.users.getAllUsers);

router.post('/login', controller.auth.login);

router.post('/submitChallenge', controller.challenges.postChallenge);

router.put('/toggleChallenge/:id', controller.challenges.updateChallengeStatus);

module.exports = router;