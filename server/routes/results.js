const express = require('express'); 
const router = express.Router();
const data = require('../data')



router.get('/', (req,res) => {
    res.send(data)
});

router.get('/random', (req,res) => {
    res.send(data[Math.floor(Math.random() * data.length)])
})







module.exports = router;

