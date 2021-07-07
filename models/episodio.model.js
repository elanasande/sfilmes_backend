const mongoose = require('mongoose');

const EpisodioSchema = new mongoose.Schema({
  video: {
    type: Number,
    default: '',
  },
  serie: {
    type: Number,
    default: '',
  },
  numero: {
    type: Number,
    default: '',
  },
  titulo: {
    type: String,
    default: '',
  },
  sinopse: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('Episodio', EpisodioSchema);
