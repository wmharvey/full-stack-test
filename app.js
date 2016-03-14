const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const restify = require('express-restify-mongoose');
const bodyParser = require('body-parser');

const imageModel = require('./models/Image.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use( express.static( path.join(__dirname, '/public') ) );

restify.serve(router, imageModel);
app.use(router);

app.use(function(err, req, res, next) {
  res.status(401).send(err);
});
app.use(function(req, res, next) {
  res.status(404).send('404, no page found: ' + req.url);
});

module.exports = app;
