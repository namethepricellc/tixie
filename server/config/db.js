// Load environment variables from .env file
require('dotenv').config();

// Import MongoDB driver and Mongoose ORM
const mongoose = require('mongoose');

// Set up connection URL using environment variables
const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@tixietestcluster.khgyx96.mongodb.net/?retryWrites=true&w=majority`;

// Connect to the MongoDB cluster using Mongoose
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// Get the connection
const connection = mongoose.connection;

// Bind connection to error event to get notified for connection errors
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
