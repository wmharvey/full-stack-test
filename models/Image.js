const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Image = new Schema({
  caption: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('Image', Image);
