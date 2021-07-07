const mongoose = require('mongoose');

const GeneroSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: '',
  },
  genero: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('Genero', GeneroSchema);
