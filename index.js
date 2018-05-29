const express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var request = require('request');
const app = express()

var _ = require('underscore');
var q = require('q');

app.use(bodyParser());
mongoose.connect("mongodb://localhost:27017/temp");

mongoose.Promise = q.Promise;
mongoose.Promise = global.Promise;

global.__base = __dirname + '/';

var resourceClient = require('./controllers/client.controller');

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/api/client',resourceClient.createClient);

app.listen(3000, () => console.log('Example app listening on port 3000!'))