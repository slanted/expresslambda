const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
})

module.exports.handler = serverless(app);