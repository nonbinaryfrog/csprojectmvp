const mongoose = require('mongoose');

const { Schema } = mongoose;

const submitSchema = new Schema(
    {
      author: {
        type: Array,
        required: true
      },
      title: {
        type: String,
        required: true
      },
    },
  
    { collection: 'submissions' }
  );

  module.exports = mongoose.model('submissions', submitSchema);