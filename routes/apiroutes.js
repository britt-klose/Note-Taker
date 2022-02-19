
const api= require ('express').Router();
const path = require('path');
const fs = require ('fs');
var newNote=[]
fs.readFile(path.join(__dirname,'../db/db.json'), 'utf8' , (err, data) => {
  newNote = JSON.parse(data)
 })

//GET/api/notes should read db.json file and return saved notes as JSON
api.get('/notes', (req, res) => {
    console.log('was hit');
    res.json(newNote)
});


//DELETE Route for specific note
api.delete('/notes/:note_id', (req, res) =>{

  console.log(req.params)
    noteArray=[];
    for (let i = 0; i < newNote.length; i++) {
      if(req.params.note_id != newNote[i].id) {
          noteArray.push(newNote[i])
      }
    }
    fs.writeFileSync(path.join(__dirname,'../db/db.json'), JSON.stringify(noteArray));
    newNote = noteArray
    res.json(newNote);
  });

//POST /api/notes should receive new note to save on request body
api.post('/notes', (req, res) =>{
    console.log(req.body)
  // Each note needs unique id when saved. 
    req.body.id = Math.floor((1+ Math.random())* 0x100000)
    newNote.push(req.body);
  //Add it to db.json. Then return new note to client.
    fs.writeFileSync(path.join(__dirname,'../db/db.json'), JSON.stringify(newNote));
    res.json(newNote);
    
});

module.exports =api