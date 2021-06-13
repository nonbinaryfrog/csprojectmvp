const mongoose = require('mongoose');

const { Schema } = mongoose;

const submitSchema = new Schema(
    {
      author: {
        type: Array,
      },
      title: {
        type: String,
      },
    },
  
    { collection: 'submissions' }
  );

  module.exports = mongoose.model('submissions', submitSchema);