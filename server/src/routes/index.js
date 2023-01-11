const { Router } = require('express');
const { Type } = require("../db.js"); 
const { getType } = require('./functions.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const profeRouter = require('./profeRouter.js');

const router = Router(); 

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/profe', profeRouter);

module.exports = router; 