
const path = require ('path');
const html = require ('express').Router();


// GET/notes should return notes.html file
html.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);


// GET / should return index.html file
html.get('/', (req, res) =>{
  console.log('testing spot');
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = html