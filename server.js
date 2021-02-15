const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

if (dotenv.error) {
  throw dotenv.error
}

const MongoClient = require('mongodb').MongoClient
MongoClient.connect ({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})

const URI = 'mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@cluster0.ryk29.mongodb.net/CSProjectDB?retryWrites=true&w=majority';
// will not use api folder yet
// global.Task = require('./api/models/model');
// const routes = require('./api/routes/routes');

// To use for connecting to the MongoDB database
MongoClient.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
MongoClient.connect( URI,
  { useNewUrlParser: true,
  useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => console.error(error))

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes(app);
app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});