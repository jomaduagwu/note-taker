// import the required packages
const express = require('express')
const path = require('path'); // needed?
const fs = require('fs'); //needed?

// import the routes
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

// initialize express
const app = express();
const PORT = process.env.PORT || 3001;



const allNotes = require('./db/db.json');

// add middleware, set-up parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// link to assets
app.use(express.static('public'));

//need this?
// app.get('api/notes', (req, res) => {
//     res.json(allNotes.slice(1));
// });

// route to route files
// app.use('/routes/api', apiRoutes);
// app.use('/routes/html', htmlRoutes);
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// start tge server
app.listen(PORT, () =>
console.log(`Express server listening on port ${PORT}`));


//display existing notes in the left, empty fields to enter new note in the right
// app.get('/notes', (req, res) => {
//     // TODO: Retrieve existing notes from a database or file
//     const existingNotes = [];
  
//     // Render the notes page template with the existing notes
//     res.render('notes', { notes: existingNotes });
//   });