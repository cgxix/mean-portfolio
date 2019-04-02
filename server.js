const express = require('express')
const app = express()
const port = 3000

var index = require('./routes/api/index')
var users = require('./routes/api/users')

app.use('/', index)
app.use('/users', users)


app.listen(port, () => console.log('App listening on port ' + port))
