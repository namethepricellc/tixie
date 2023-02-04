const React = require('react');
const ReactDOM = require('react-dom');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const App = require('./App');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Define Port
const port = process.env.PORT || 5000;

// Use Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Listen to incoming requests
app.listen(port, () => console.log(`Server started on port ${port}`));

