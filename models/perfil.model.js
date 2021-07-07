const mongoose = require('mongoose');

const PerfilSchema = new mongoose.Schema({
   nome: {
    type: String,
    default: '',
  },
  usuario: {
    type: Number,
  },
});

module.exports = mongoose.model('Perfil', PerfilSchema);
