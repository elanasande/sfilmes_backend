const mongoose = require('mongoose');

const RecomendacaoSchema = new mongoose.Schema({
  titulo: {
    type: Number,
    default: '',
  },
  perfil: {
    type: String,
    default: '',
  },
  rank: {
    type: Number,
  },
});

module.exports = mongoose.model('Recomendacao', RecomendacaoSchema);
