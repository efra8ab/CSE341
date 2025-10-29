// express web server
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Helloooo dog');
});

app.listen(port);
console.log('Web server is listening at port ' + port);


