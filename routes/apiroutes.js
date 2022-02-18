
const api= require ('express').Router();
//const app= require('.')
const path = require('path');
const fs = require ('fs');
//let newNote = require ('../db/db.json');
var newNote=[]
fs.readFile(path.join(__dirname,'../db/db.json'), 'utf8' , (err, data) => {
  newNote = JSON.parse(data)
 })

//GET/api/notes should read db.json file and return saved notes as JSON
api.get('/notes', (req, res) => {
    console.log('was hit');
    res.json(newNote)
   //readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  // res.sendFile(path.join(__dirname, '../db/db.json')) 
});

//GET Route for specific note
//tutor had me delete .thens before 
// api.get('/:note_id', (req, res) => {
//   const noteId =req.params.note_id;
//   fs.readFile ('./db/db.json')
//   .then((data) => JSON.parse (data))
//   .then((json) =>{
//     const result =json.filter((note) => note.note_id ===noteId);
//     return result.length>0
//       ? res.json(result)
//       : res.json("No notes with that ID");
//   });
// });

//DELETE Route for specific note
//might have to delete .thens
api.delete('/notes/:note_id', (req, res) =>{
  // const noteId = req.params.note_id;
  // fs.readFile('./db/db.json')
  // .then ((data) => JSON.parse(data))
  // .then ((json) => {
    //Making a new array for all the notes except the note deleted (w id provided in url)
    //const result = json.filter((note) => note.note_id !== noteId);
    //save this array to file system
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
//});

//POST /api/notes should receive new note to save on request body
//and add it to db.json. THen return new note to client.
//each note needs unique id when saved. (look into npm packages to help)
api.post('/notes', (req, res) =>{
    console.log(req.body)
    req.body.id = Math.floor((1+ Math.random())* 0x100000)
    newNote.push(req.body);
    fs.writeFileSync(path.join(__dirname,'../db/db.json'), JSON.stringify(newNote));
    res.json(newNote);
    
});

   
module.exports =api