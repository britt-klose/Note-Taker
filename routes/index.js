const express = require ('express');
//const fs = require ('fs'); //circle back

//import modular routers html and api

const htmlRouter = require ('./htmlroute');
const apiRouter = require ('./apiroutes');

const app = express ();

app.use ('/html', htmlRouter);
app.use ('/api', apiRouter);

module.exports = app;