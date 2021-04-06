const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
require('./api/models/model');
const routes = require('./api/routes/routes');

if (dotenv.error) {
  throw dotenv.error
}

const port = process.env.PORT || 3000;
const app = express();

// To use for connecting to the MongoDB database
mongoose.connect( process.env.MONGO_URI,
  { useNewUrlParser: true,
  useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => {console.error(error)})

// Middleware
app.use(cors());
app.use(cookieParser.urlencoded({ extended: true }));
app.use(cookieParser.json());

// Routes
app.get('/', function(req, res, next) {
  res.send({ message: 'You got this far! Try /books'})
})
app.use('/books', routes);

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});

// Error handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({ error: err.message })
});

module.exports = app;