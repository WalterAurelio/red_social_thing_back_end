const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const noticiaSchema = new mongoose.Schema({
  titulo: {
    type: Schema.Types.String,
    required: true,
  },
  descripcion: {
    type: Schema.Types.String,
  },
});

module.exports = mongoose.model('Noticia', noticiaSchema);
