// require mongoose to create a schema for the book form
const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    author: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    illustrator: {
      type: Array,
    },
    genre: {
      type: String,
      required: true
    },
    subgenre: {
      type: Array,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },

  { collection: 'books' }
);

module.exports = mongoose.model('books', bookSchema);