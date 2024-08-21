const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const TextSchema = new Schema({
  title: {
    type: String,
    required: true
  } ,
  
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Texts', TextSchema);