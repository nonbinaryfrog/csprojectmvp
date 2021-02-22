// require mongoose to create a schema for the book form
const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    author: {
      type: Array,
      required: 'Author name cannot be blank'
    },
    title: {
      type: String,
      required: 'Book title cannot be blank'
    },
    illustrator: {
      type: Array,
    },
    genre: {
      type: String,
      required: 'Genre cannot be blank'
    },
    subgenre: {
      type: Array,
      required: 'Subgenre cannot be blank'
    },
    description: {
      type: String,
      required: 'Description cannot be blank'
    }
  },

  { collection: 'books' }
);

module.exports = mongoose.model('books', bookSchema);