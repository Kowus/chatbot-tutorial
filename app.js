'use strict'

const express = require('express'),
  request = require('request'),
  bodyParser = require('body-parser'),
  app = express();

app.set('port', (process.env.port || 3000));

// Body parser to process data 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/', function (req, res) {
  res.send("Hi, I'm a bot");
});

// Facebook
app.get('/webhook/', function (req, res) {
  if (req.query['hub.verify_token'] === 'davidnomo')
  {
    res.send(req.query['hub.challenge']);
  }
  res.send("Wrong token");
})

app.listen(app.get('port'), function () {
  console.log('server running on port 3000');
})