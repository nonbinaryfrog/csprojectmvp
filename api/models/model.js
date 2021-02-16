// require mongoose to create a schema for the book form
const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    authorName: {
      type: String,
      required: 'Author name cannot be blank'
    },
    bookTitle: {
      type: String,
      required: 'Book title cannot be blank'
    }
  },
  // the collection may just be submissions if this is for
  // the submission form
  { collection: 'submissions' }
);

module.exports = mongoose.model('books', bookSchema);