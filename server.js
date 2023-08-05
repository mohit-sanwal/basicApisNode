const express = require('express');

const app = express();

const requestFilter = (req, res, next) => {
  if(!req.query.age) {
    res.send('please provide age')
  } else {
    if (req.query.age < 18) {
     res.send('you can not access this page')
    } else {
        // if we have alredy send response after that we can not access next that why adding in else
      next();
    }
  }
}

app.use(requestFilter);

app.get('/', (req, res) => {
    res.send('welcome to home page')
}) 

app.get('/users', () => {
    res.send('users..')
}) 



app.listen(3000);