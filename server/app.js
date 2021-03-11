const express = require('express');
const cors = require('cors');
const data = require('./data')
const app = express();
const results = require('./routes/results')



app.get('/', (req,res) => {
    res.send("Dogoogle");
})

app.use('/results', results);








module.exports = app;
