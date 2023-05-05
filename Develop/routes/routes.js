// The following HTML routes should be created:
// GET /notes should return the notes.html file.
// GET * should return the index.html file.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/notes', (req, res) => {
    res.send()
})
// The following API routes should be created:
// GET /api/notes should read the db.json file and return all saved notes as JSON.
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
app.post('/api/notes', (req, res) => {
    const { noteTitle, noteText } = req.body;
    const newNote = {
        noteTitle,
        noteText,
    };
    readAndAppend(newNote, './db/db.json');
    const response = {
        status: 'success',
        body: newNote,
    };
    res.json(response);
} else {
    res.json('Error in posting new note');
}
)