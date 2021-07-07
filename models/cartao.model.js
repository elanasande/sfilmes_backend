const mongoose = require('mongoose');

const CartaoSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: '',
  },
  nome: {
    type: String,
    default: '',
  },
  numero: {
    type: Number,
    default: '',
  },
  ano: {
    type: Number,
    default: '',
  },
  mes: {
    type: Number,
    default: '',
  },
  usuario: {
    type: Number,
  },
});

module.exports = mongoose.model('Cartao', CartaoSchema);
