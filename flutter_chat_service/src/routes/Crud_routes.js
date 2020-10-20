const express = require('express')
const { register } = require('../controller/Crud_controller')
var app = express()
app.post('/register', register)

module.exports = app;