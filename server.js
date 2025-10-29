// express web server
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./Routes/lesson1Route'));

app.listen(port);
console.log('Web server is listening at port ' + port);


