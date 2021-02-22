const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const routes = require('./api/routes/routes');

if (dotenv.error) {
  throw dotenv.error
}

// To use for connecting to the MongoDB database
mongoose.connect( process.env.MONGO_URI,
  { useNewUrlParser: true,
  useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => {console.error(error)})

// Middleware
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use( '/',routes)
app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

module.exports = app;