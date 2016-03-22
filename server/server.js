var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes');
var app = express();

app.use(bodyParser.json());
app.use('/', router);

app.listen(3000, function() {
  console.log('listening on 3000');
});

