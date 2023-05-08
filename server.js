// import the required packages
const express = require('express')
const path = require('path'); 
const fs = require('fs'); 

// import the routes
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

// initialize express
const app = express();

// set PORT
const PORT = process.env.PORT || 3001;

const allNotes = require('./db/db.json'); 

// add middleware, set-up parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// link to assets
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// start the server
app.listen(PORT, () => {
console.log(`Express server listening on port ${PORT}`)
});


