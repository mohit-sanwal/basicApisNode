const express = require('express');
const requestFilter = require('./middleware');
const app = express();

const route = express.Router();

// applying middleware to single route/ the route we want
// app.use(requestFilter);
route.use(requestFilter);
route.get('/', (req, res) => {
    res.send('welcome to home page')
}) 

route.get('/users', (req, res) => {
    res.send('welcome to users page')
}) 


app.get('/about', (req, res) => {
    res.send('welcome to about page')
}) 

app.use('/', route);

app.listen(3000);