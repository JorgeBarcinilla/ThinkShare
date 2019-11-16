const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// Setting
app.set('port', process.env.PORT || 4000);
  

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/post', require('./routes/post.routes'));
app.use('/api/user', require('./routes/user.routes'));

module.exports = app;