// routes for books

const bookBuilder = require('../controllers/controller');
let router = require('express').Router();


  // get all books
  router.get('/books', bookBuilder.list_all_books);

  // get books based on the genre
  router.get('/books/:genre', bookBuilder.get_some_books)

  // get books based on multiple queries
  router.get('/books/:genre/:subgenre', bookBuilder.get_these_books)

  // make a new book entry
  router.post('/Submit', bookBuilder.create_a_book);

module.exports = router;