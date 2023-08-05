const express = require('express');
const requestFilter = require('./middleware');
const app = express();

// applying middleware to single route/ the route we want
// app.use(requestFilter);

app.get('/', requestFilter, (req, res) => {
    res.send('welcome to home page')
}) 

app.get('/users', (req, res) => {
    res.send('welcome to users page')
}) 


app.get('/about', (req, res) => {
    res.send('welcome to about page')
}) 



app.listen(3000);