const express = require('express')
const path = require('path');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/routes/api', apiRoutes);
app.use('/routes/html', htmlRoutes);




app.listen(PORT, () =>
console.log(`Express server listening on port ${PORT}`));