// Have to change this code because MongoDB will not be added yet
const bookBuilder = require('../controllers/controller');

module.exports = app => {
  app
    .route('/books')
    .get(bookBuilder.list_all_books)
    .post(bookBuilder.create_a_book);

  app
    .route('/tasks/:bookId')
    .get(bookBuilder.read_a_task)
};