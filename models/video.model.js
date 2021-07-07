const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: '',
  },
  duracao: {
    type: Number,
    default: '',
  },
  caminho: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('Video', VideoSchema);
