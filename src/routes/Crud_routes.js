const express = require('express')
const { register } = require('../controller/Crud_controller')
var app = express()
app.post('/register', register)
// app.post('/register', (req, res)=>{
//     console.log('-------------: ' + JSON.stringify(req.body))
// })

module.exports = app;