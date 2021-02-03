// because MongoDB will not be added, this file will
//likely not be used by the app

const mongoose = require('mongoose');
const book = mongoose.model('book');

// may need to change the mongoose.model to 'submissions' for the collection
// also specify how to get books based on genre/selection

exports.list_all_books = (req, res) => {
  task.find({}, (err, books) => {
    if (err) res.send(err);
    res.json(books);
  });
};

exports.create_a_book = (req, res) => {
  const newBook = new book(req.body);
  newBook.save((err, book) => {
    if (err) res.send(err);
    res.json(book);
  });
};

exports.read_a_book = (req, res) => {
  task.findById(req.params.bookId, (err, book) => {
    if (err) res.send(err);
    res.json(book);
  });
};

