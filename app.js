var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.use(express.static(__dirname));

app.get("/", function(req, res) {
  res.sendFile('index.html');
});

app.listen(8080);
