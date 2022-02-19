const express = require ('express');

const htmlRouter = require ('./htmlroute');
const apiRouter = require ('./apiroutes');

const app = express ();

app.use ('/html', htmlRouter);
app.use ('/api', apiRouter);

module.exports = app;