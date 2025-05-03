const express = require('express');
const usuariosController = require('./controllers/usuarios.controller');
const router = express.Router();

const productos = require("./controllers/productos.controller");

//Rutas

router.get("/productos", productos.listar);
router.get("/productos/:id", productos.obtener);
router.post("/productos", productos.crear);
router.put("/productos/:id", productos.actualizar);
router.delete("/productos/:id", productos.eliminar);


router.get('/usuarios', usuariosController.findAll);
router.get('/usuarios/:id', usuariosController.findOne);
router.post('/usuarios', usuariosController.create);
router.put('/usuarios/:id', usuariosController.update);
router.delete('/usuarios/:id', usuariosController.delete);

module.exports = router;