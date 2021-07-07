const mongoose = require('mongoose');

const ArtistaSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: '',
  },
  nome: {
    type: String,
    default: '',
  },
  cache: {
    type: Number,
    default: '',
  },
});

module.exports = mongoose.model('Artista', ArtistaSchema);
