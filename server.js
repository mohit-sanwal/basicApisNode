const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public')


// to statically accessing html pages while hitting in the browser url
// app.use(express.static(`${publicPath}`));

app.get('', (req, res) => {
   res.sendFile(`${publicPath}/index.html`);
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
})

app.listen(5000);