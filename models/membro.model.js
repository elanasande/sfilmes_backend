const mongoose = require('mongoose');

const MembroSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: '',
  },
  papel: {
    type: Number,
    default: '',
  },
  artista: {
    type: Number,
    default: '',
  },
  video: {
    type: Number,
    default: '',
  },
});

module.exports = mongoose.model('Membro', MembroSchema);
