// Have to change this code because MongoDB will not be added yet
const bookBuilder = require('../controllers/controller');
const model = require('./api/models/model');

module.exports = app => {
  app
    .route('/books')
    .get(bookBuilder.list_all_books) 
    .post(bookBuilder.create_a_book);

    // get books based on the genre
  app
    .route('/books/:genre')
    .get(bookBuilder.read_a_book)
};