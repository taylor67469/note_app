const fs = require('fs');
const notes=[]
const express = require('express');
const path = require('path');
const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');
  
// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));
app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, 'db/db.json')));
app.post('/api/notes',(req,res)=>{
    notes.push(req.body);
    res.json();
    for (let i = 0;i<notes.length;i++){
    fs.writeFile('db/db.json',JSON.stringify(notes[i]),err => {
        if (err) {
          console.error(err)
          return
        }
})}
})
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
