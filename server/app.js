const express = require('express');
const cors = require('cors');
const data = require('./data')
const app = express();
const results = require('./routes/results')

app.use(cors());

app.get('/', (req,res) => {
    res.send("Dogoogle");
})

app.use('/results', results);


//Below will catch requests which made it past the two above and handle them.
//Reaching this point means that no route was able to handle the request 
app.use((req,res,next) => {
    const error = new Error('404: Not Found');
    error.status = 404;
    next(error) // forward the error
})

//This will handle errors thrown from anywhere in this application

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })

} )



module.exports = app;
