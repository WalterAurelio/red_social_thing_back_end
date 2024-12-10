const Noticia = require('../models/noticia.model');

const error_1 = 'No es posible encontrar el recurso solicitado.';

const getAllNoticias = async (req, res) => {
  try {
    const noticias = await Noticia.find();
    res.status(200).json(noticias);
  } catch (error) {
    res.status(404).json({ message: `${error_1} ${error.message}` });
  }
};

const getNoticiaById = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const noticia = await Noticia.findOne({ _id });
    res.status(200).json(noticia);
  } catch (error) {
    res.status(404).json({ message: `${error_1} ${error.message}` })
  }
}

module.exports = { getAllNoticias, getNoticiaById };
