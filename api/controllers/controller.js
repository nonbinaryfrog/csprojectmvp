// require mongoose to create a model for the books
const mongoose = require('mongoose');
const book = mongoose.model('books');

let Book = require('../models/model');

// getting all books
exports.list_all_books = async function (req, res) {
    try {
        let books = await Book.find({});
        res.json(books);
    } catch (err) {
        res.status(500).send({ error: 'Something went wrong here.' });
    }
}

// getting book by genre
exports.get_some_books = async function (req, res) {
  let { genre } = req.params;
  try {
    let books = await Book.find({"genre": genre});
    if (books) {
      res.json(books)
    } else {
      res.status(404).send({error: 'Not Found'});
    }
  } catch (err) {
    res.status(500).send({error: err.message});
  }
}

// getting book by genre & subgenre
exports.get_these_books = async function (req, res) {
  let { genre, subgenre } = req.params;
  try {
    let books = await Book.find({"genre": genre, "subgenre": {$all: [subgenre]}});
    if (books) {
      res.json(books)
    } else {
      res.status(404).send({error: 'Not Found'});
    }
  } catch (err) {
    res.status(500).send({error: err.message});
  }
}

// when a person fills out the submission form to submit this will be called upon
exports.create_a_book = (req, res) => {
  const newBook = new book(req.body);
  newBook.save((err, book) => {
    if (err) {
      res.send(err);
    } else {
      res.json(book);
      res.send(book);
    }
  });
};

