var express = require('express');
var path = require('path');
var routeIndex = require('./routes/AppController');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routeIndex);

app.listen(3000);

module.exports = app;
