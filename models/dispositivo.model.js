const mongoose = require('mongoose');

const DispositivoSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: '',
  },
  ip: {
    type: String,
    default: '',
  },
  usuario: {
    type: Number,
  },
});

module.exports = mongoose.model('Dispositivo', DispositivoSchema);
