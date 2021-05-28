const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
  duracao: {
    type: Number,
    default: '',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Filme', FilmeSchema);
