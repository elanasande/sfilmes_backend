const mongoose = require('mongoose');

const TituloSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: '',
  },
  titulo: {
    type: String,
    default: '',
  },
  sinopse: {
    type: String,
    default: '',
  },
  ano: {
    type: Number,
    default: '',
  },
});

module.exports = mongoose.model('Titulo', TituloSchema);
