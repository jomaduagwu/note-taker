const express = require('express')

const app = express();

// The following HTML routes should be created:
// GET /notes should return the notes.html file.
// GET * should return the index.html file.
app.get('/', (req, res) => {
    res.send()
})

app.get('/notes', (req, res) => {
    res.send()
})



// The following API routes should be created:
// GET /api/notes should read the db.json file and return all saved notes as JSON.
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).