const express = require('express')
require('dotenv').config()
const {logger} = require('./logger')

const app = express()

const PORT = process.env.PORT;

app.get('/', function (req, res) {    
  res.send('Hello World')
})
 
app.listen(PORT, ()=> {  
    logger('DEBUG', `Server running at PORT ${PORT}`)
})