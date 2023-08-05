const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public')


// to statically accessing html pages while hitting in the browser url
app.use(express.static(`${publicPath}`));

// app.get('', (req, res) => {
//    const filePath = 
//    res.send(filePath);
// })

app.listen(5000);