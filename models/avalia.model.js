const mongoose = require('mongoose');

const AvaliaSchema = new mongoose.Schema({
  titulo: {
    type: Number,
    default: '',
  },
  perfil: {
    type: String,
    default: '',
  },
  gostei: {
    type: Boolean,
    default: '',
  },
  naoGostei: {
    type: Boolean,
    default: '',
  },
});

module.exports = mongoose.model('Avalia', AvaliaSchema);
