'use strict';

const express = require('express'),
  app = express();

app.get('/', (req, resp) => resp.send('hello world'));

app.listen('9000', () => console.log('App is running'));
