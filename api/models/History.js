const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let History = new Schema({
  category: {
    type: String
  },
  content: {
    type: Array<Object>
  }
},{
    collection: 'history'
});

module.exports = mongoose.model('History', History);
