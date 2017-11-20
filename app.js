//
const express = require('express');
app = express();

const path = require('path');

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'hbs');

app.listen(3000);
