const mongoose = require('mongoose');

const ListaDesejosSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: '',
  },
  perfil: {
    type: String,
    default: '',
  },
  titulo: {
    type: Number,
  },
});

module.exports = mongoose.model('ListaDesejos', ListaDesejosSchema);
