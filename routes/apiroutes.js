
const app= require ('express').Router();

app.get('/api/notes', (req, res) => {
    console.log('was hit')
  // res.sendFile(path.join(__dirname, '../db/db.json')) 
});

app.post('/api/notes', (req, res) =>{
    console.log(req.body)
    
});
   
module.exports =app