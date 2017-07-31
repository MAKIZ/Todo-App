// dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// initialize app
const app = express();

// middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// static file
app.use(express.static('public'));

// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set ports
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});