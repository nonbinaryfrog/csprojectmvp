// require mongoose to create a model for the books
const { db } = require('mongodb');
const mongoose = require('mongoose');
const book = mongoose.model('books');

let Book = require('../models/model');

// getting all books
exports.list_all_books = async function (req, res, next) {
    try {
        let books = await Book.find({});
        res.json(books).send(books);
    } catch (err) {
        res.status(500).send({ error: 'Something went wrong here.' });
    }
}

// getting book by genre

exports.get_some_books = async function (req, res, next) {
  let { genre } = req.params;
  try {
    let books = await Book.findById(genre).exec();
    if (books) {
      res.send(books)
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

