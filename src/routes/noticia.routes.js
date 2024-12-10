const { Router } = require('express');
const { getAllNoticias, getNoticiaById } = require('../controllers/noticia.controller');
const route = Router();

route.get('/', getAllNoticias);
route.get('/:id', getNoticiaById);

module.exports = route;
