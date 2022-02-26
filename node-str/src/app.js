'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Carrega rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/products', productRoute);
app.use('/products', productRoute);


module.exports = app;