const { Router } = require('express');
const { getAllNoticias } = require('../controllers/noticia.controller');
const route = Router();

route.get('/', getAllNoticias);

module.exports = route;
