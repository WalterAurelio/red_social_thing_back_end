const { Router } = require('express');
const noticiaRoutes = require('../routes/noticia.routes');
const router = Router();

router.use('/noticias', noticiaRoutes);

module.exports = router;
