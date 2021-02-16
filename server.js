const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

if (dotenv.error) {
  throw dotenv.error
}

// will not use api folder yet
// global.Task = require('./api/models/model');
// const routes = require('./api/routes/routes');

// To use for connecting to the MongoDB database
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect( process.env.MONGO_URI,
  { useNewUrlParser: true,
  useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => {console.error(error)})

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