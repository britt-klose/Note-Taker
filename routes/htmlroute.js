const path = require ('path')
const html = require ('express').Router();

// GET Route for feedback page
//GET/notes should return notes.html file
html.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// Wildcard route to direct users to a homepage
//GET * should return index.html file
html.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports =html