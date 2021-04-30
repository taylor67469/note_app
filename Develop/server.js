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
// app.get('/api/notes',(req,res)=>{
    
//     fs.readFile('db.json', res , (err, data) => {
//         if (err) {
//           console.error(err)
//           return
//         }
//         console.log(data)
//       })
// })
app.post('/api/notes',(req,res)=>{
    notes.push(req.body);
    for (let i = 0;i<notes.length;i++)
    res.json();
    fs.appendFile('db.json',notes[i].title,err => {
        if (err) {
          console.error(err)
          return
        }
    // return notes[i]
})
})
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
