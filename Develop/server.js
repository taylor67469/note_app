const fs = require('fs');
const notes=[{

}]
const express = require('express');
const path = require('path');

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
app.get('/api/notes',(req,res)=>{
    
    const chosen=req.params.newNote;
    console.log(chosen);
    for (let i=0;i<notes.length;i++)
    return res.json(notes[i])
})
app.post('/api/notes',(req,res)=>{
    const note=req.body;
    note.routeName=note.title;
    console.log(notes);

    notes.push(note);
    res.json(note);
})
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
