// import the required packages
const express = require('express');
const {v4: uuidv4 } = require('uuid');
const notes = require('../db/db.json');
const fs = require('fs');

const router = express.Router();

router.use(express.json());

// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/notes', (req, res) => { 
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        res.json(notes);
    });
 });

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, 
//  and then return the new note to the client. 
router.post('/notes', (req, res) => { 
    const newNote = req.body;
        newNote.id = uuidv4();
        notes.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.status(201).json(newNote);
        });
  });
   
// delete request
router.delete('/notes/:id', (req, res) => { 
    const noteId = req.params.id;
    const index = notes.findIndex((note) => note.id === noteId);
    if (index !== -1) {
        notes.splice(index, 1);
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.sendStatus(204);
        })
    } else {
        res.sendStatus(404);
    }
});


module.exports = router;