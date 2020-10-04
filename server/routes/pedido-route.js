const express = require('express');
const router = express.Router();
const PedidoController = require("../controllers/PedidoController.js");
const ProdutoController = require ("../controllers/ProdutoController.js");

router.get("/:numeroMesa", PedidoController.GetByMesa);
router.post("/", PedidoController.Insert);
router.post("/Produto/", ProdutoController.Insert);

module.exports = router;