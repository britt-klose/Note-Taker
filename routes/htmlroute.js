const path = require ('path');
//const app = require('.');
const html = require ('express').Router();

// GET Route for feedback page
//GET/notes should return notes.html file
html.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// Wildcard route to direct users to a homepage
//GET * should return index.html file
//get/ vs get *
html.get('/', (req, res) =>{
  console.log('testing spot');
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = html