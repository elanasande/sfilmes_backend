const mongoose = require('mongoose');

const AssisteSchema = new mongoose.Schema({
  video: {
    type: Number,
    default: '',
  },
  perfil: {
    type: String,
    default: '',
  },
  vezes: {
    type: Number,
    default: '',
  },
  tempo: {
    type: Number,
    default: '',
  },
  data: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Assiste', AssisteSchema);
