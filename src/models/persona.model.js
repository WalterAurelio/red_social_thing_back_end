const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const publicacionSchema = new mongoose.Schema({
  descripcion: Schema.Types.String,
  fechaDeCreacion: {
    type: Date,
    immutable: true,
    default: () => Date.now()
  }
});

const personaSchema = new mongoose.Schema({
  nombre: {
    type: Schema.Types.String,
    required: true,
  },
  apellido: {
    type: Schema.Types.String,
    required: true,
  },
  fotoDePerfil: {
    type: Schema.Types.String,
    default: 'default_avatar',
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  amigos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Persona',
    },
  ],
  publicaciones: [publicacionSchema]
});

module.exports = mongoose.model('Persona', personaSchema);
