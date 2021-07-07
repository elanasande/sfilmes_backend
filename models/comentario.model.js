const mongoose = require('mongoose');

const ComentarioSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: '',
  },
  perfil: {
    type: String,
    default: '',
  },
  membro: {
    type: Number,
    default: '',
  },
  textoCometario: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('Comentario', ComentarioSchema);
