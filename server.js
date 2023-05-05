// import the required packages
const express = require('express')
const path = require('path'); // needed?
const fs = require('fs'); //needed?

// import the routes
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

const app = express();
const PORT = process.env.PORT || 3001;

// add middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// route to route files
app.use('/routes/api', apiRoutes);
app.use('/routes/html', htmlRoutes);


// start tge server
app.listen(PORT, () =>
console.log(`Express server listening on port ${PORT}`));