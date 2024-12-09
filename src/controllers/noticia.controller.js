const Noticia = require('../models/noticia.model');

const getAllNoticias = async (req, res) => {
  try {
    const noticias = await Noticia.find();
    res.status(200).json(noticias);
  } catch (error) {
    res.status(404).json({ message: `No es posible encontrar el recurso solicitado. ${error.message}` });
  }
};

module.exports = { getAllNoticias };
