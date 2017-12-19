//App setup for required modules
var express = require('express');
var path = require('path');
var routeIndex = require('./routes/AppController');

var app = express();

//setup static html
app.use(express.static(path.join(__dirname, 'public')));
//setup route to handle requests
app.use('/', routeIndex);

//listen on port 3000 for requests
app.listen(3000);

//export as app
module.exports = app;
