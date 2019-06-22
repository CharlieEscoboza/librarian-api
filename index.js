'use strict';

const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  apiRoute = require('./api/v1/routes');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api/v1', apiRoute);

app.listen('9000', () => console.log('App is running'));
