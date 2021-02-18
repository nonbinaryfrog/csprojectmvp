// require mongoose to create a model for the books
const mongoose = require('mongoose');
const book = mongoose.model('books');


exports.list_all_books = (req, res) => {
  book.find({}, (err, books) => {
    if (err) {
      res.send(err);
    } else {
      res.json(books);
    }
  });
};

// when a person fills out the submission form to submit this will be called upon
exports.create_a_book = (req, res) => {
  const newBook = new book(req.body);
  newBook.save((err, book) => {
    if (err) {
      res.send(err);
    } else {
      res.json(book);
    }
  });
};

exports.read_a_book = (req, res) => {
  book.findById(req.params.genre, (err, book) => {
    if (err) {
      res.send(err);
    } else {
      res.json(book);
    }
  });
};

