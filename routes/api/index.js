var express = require('express')
var router = express.Router()

// Get signup page
router.get('/', function(req, res){
    res.send('Welcome to my portfolio')
})

module.exports = router