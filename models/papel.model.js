const mongoose = require('mongoose');

const PapelSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: '',
  },
  papel: {
    type: Number,
    default: '',
  },
});

module.exports = mongoose.model('Papel', PapelSchema);
