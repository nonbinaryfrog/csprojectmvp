const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

if (dotenv.error) {
  throw dotenv.error
}

const db = require('db')
db.connect ({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})

// will not use api folder yet
global.Task = require('./api/models/model');
const routes = require('./api/routes/routes');

// To use for connecting to the MongoDB database
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  'mongodb://localhost/3000',
  { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// will not use routes folder yet
// routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);