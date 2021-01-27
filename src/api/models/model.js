const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    authorName: {
      type: String,
      required: 'authorName cannot be blank'
    },
    bookTitle: {
      type: String,
      required: 'bookTitle  cannot be blank'
    }
  },
  // the collection may just be submissions if this is for
  // the submission form
  { collection: 'submissions' }
);

module.exports = mongoose.model('submissions', bookSchema);