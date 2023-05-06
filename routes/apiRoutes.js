const express = require('express');
const {v4: uuidv4 } = require('uuid');

// const fs = require('fs');
// const path = require('path');
// const express = require('express'); // needed?
 
// uuidv4();

const router = express.Router();
const notes = [];

// const app = express();
// app.use(express.json()); //needed?


// The following API routes should be created:
// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/api/notes', (req, res) => { // shoult this be '/notes' only?
    res.json(notes);
    // fs.readFile('./db.json', (err, data) => {
    //     if (err) throw err;
    //     res.json(JSON.parse(data));
    });
    // res.sendFile(path.join(__dirname, './db/db.json'));
// });

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, 
//  and then return the new note to the client. 
//  You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
router.post('/api/notes', (req, res) => { // should this be '/notes only?
    // const { noteTitle, noteText } = req.body;
    // if (!noteTitle || !noteText) {
    //     return res.status(400).send('Note title and text are required');
    // }
    const newNote = req.body;
        newNote.id = uuidv4();
        notes.push(newNote);
        res.status(201).json(newNote);
        // id: uuidv4(),
        // noteTitle,
        // noteText,
    // };
    // fs.readFile('./db.json', (err, data) => {
    //     if (err) throw err;
    //     const notes = JSON.parse(data);
    //     notes.push(newNote);
    //     fs.writeFile('./db.json', JSON.stringify(notes), (err) => {
    //         if (err) throw err;
    //         res.json(newNote);
        });
   
    // readAndAppend(newNote, './db/db.json');
    // const response = {
    //     status: 'success',
    //     body: newNote,
    // };
    // res.json(response);
// } else {
//     res.json('Error in posting new note');
// });

router.delete('./api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const index = notes.findIndex((note) => note.id === noteId);
    if (index !== -1) {
        notes.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});
// app.listen(3001, () => {
//     console.log('Server is running on port 3001');

// });

module.exports = router;