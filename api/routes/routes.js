// routes for books

const bookBuilder = require('../controllers/controller');
let router = require('express').Router();


  // GET all books
  router.get('/books', bookBuilder.list_all_books);

  // GET books based on the genre
  router.get('/books/:genre', bookBuilder.get_some_books)

  // GET books based on multiple queries
  router.get('/books/:genre/:subgenre', bookBuilder.get_these_books)

  // POST a new book entry
  router.post('/Submit', bookBuilder.create_a_book);

module.exports = router;