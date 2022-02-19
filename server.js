const express = require('express');
const fs = require('fs'); 
const path = require('path');
const api = require('./routes/apiroutes.js');
const html = require('./routes/htmlroute.js')

const PORT = process.env.PORT || 3001;
const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use('/', html);

app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);