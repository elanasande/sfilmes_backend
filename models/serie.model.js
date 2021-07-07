const mongoose = require('mongoose');

const SerieSchema = new mongoose.Schema({
  titulo: {
    type: Number,
    default: '',
  },
  numeroTemporadas: {
    type: Number,
    default: '',
  },
  anoFim: {
    type: Number,
    default: '',
  },
});

module.exports = mongoose.model('Serie', SerieSchema);
