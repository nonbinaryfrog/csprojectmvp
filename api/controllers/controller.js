// require mongoose to create a model for the books
const mongoose = require('mongoose');
const book = mongoose.model('books');
const submit = mongoose.model('submissions');

// getting all books
exports.list_all_books = async function (req, res) {
    try {
        let books = await book.find({});
        res.json(books);
    } catch (err) {
        res.status(500).send({ error: 'Something went wrong here.' });
    }
}

// getting book by genre
exports.get_some_books = async function (req, res) {
  let { genre } = req.params;
  try {
    let books = await book.find({"genre": genre});
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
    let books = await book.find({"genre": genre, "subgenre": subgenre});
    if (books.length >= 1) {
      res.json(books)
    } else {
      res.status(404).send({error: 'Sorry! Not Found'});
    }
  } catch (err) {
    res.status(500).send({error: err.message});
  }
}

// submitting a book to be added to the collection
exports.create_a_book = async function (req, res) {
  let { author, title } = req.body;
  var newBook = new submit({"author": author, "title": title});
  newBook.save((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

};

