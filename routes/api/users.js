var express = require('express')
var router = express.Router()

// Get all users
router.get('/', function(req, res){
    res.send('Got users list')
})

// Get one user
router.get('/:id', function(req, res){
    res.send('Got one user')
})

// Post new user
router.post('/', function(req, res){
    res.send('Posted new user')
})

// Update new user
router.put('/:id', function(req, res){
    res.send('Updated user')
})

// Delete user
router.delete('/:id', function(req, res){
    res.send('deleted a user')
})

module.exports = router