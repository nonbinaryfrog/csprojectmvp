// routes for books

const bookBuilder = require('../controllers/controller');
let router = require('express').Router();


  // get all books
  router.get('/books', bookBuilder.list_all_books);

  // get books based on the genre
  router.get('/:genre', bookBuilder.get_some_books)

  // make a new book entry
  router.post(bookBuilder.create_a_book);

module.exports = router;