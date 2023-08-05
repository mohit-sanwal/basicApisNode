const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs')


// to statically accessing html pages while hitting in the browser url
// app.use(express.static(`${publicPath}`));

/* removing extention .html from the url */

app.get('', (req, res) => {
   res.sendFile(`${publicPath}/index.html`);
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
})

/* templating engine ejs */


app.get('/profile', (req, res) => {
    const user = {
        name: 'mohit',
        email: 'mohit123ongraph@gmail.com',
        hobbies: ['sports', 'music']
    }
    res.render('profile', {user});
})


app.get('/login', (req, res) => {
    res.render('login');
})

app.listen(5000);