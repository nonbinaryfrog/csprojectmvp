// require mongoose to create a model for the books
const mongoose = require("mongoose");
const book = mongoose.model("books");
let submitModel = require("../models/submitmodel");

// GET all books
exports.list_all_books = async function(req, res) {
  try {
    let books = await book.find({});
    if (books) {
      res.json(books);
    } else {
      res.status(404).send({ error: "Sorry! Not found" });
    }
  } catch (err) {
    res.status(500).send({ error: "Something went wrong here." });
  }
};

// GET books by author or title
exports.list_author_books = async function(req, res) {
  let { title, author } = req.params;
  try {
    let books = await book.find(
      { $or: { title: title } },
      { author: [author] }
    );
    if (books) {
      res.json(books);
    } else {
      res.status(404).send({ error: "Sorry! Not found." });
    }
  } catch (err) {
    res.status(500).send({ error: "Something went wrong here." });
  }
};

// GET book by genre
exports.get_some_books = async function(req, res) {
  let { genre } = req.params;
  try {
    let books = await book.find({ genre: genre });
    if (books) {
      res.json(books);
    } else {
      res.status(404).send({ error: "Not Found" });
    }
  } catch (err) {
    res.status(500).send({ error: "Something went wrong here." });
  }
};

// GET book by genre & subgenre
exports.get_these_books = async function(req, res) {
  let { genre, subgenre } = req.params;
  try {
    let books = await book.find({ genre: genre, subgenre: subgenre });
    if (books.length >= 1) {
      res.json(books);
    } else {
      res.status(404).send({ error: "Sorry! Not Found" });
    }
  } catch (err) {
    res.status(500).send({ error: "Something went wrong here." });
  }
};

// POST book to submissions collection
exports.create_a_book = (req, res) => {
  let { author: author, title: title } = req.body;
  new submitModel({ author, title })
    .save()
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err);
    });
};
