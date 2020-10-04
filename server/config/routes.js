const express = require('express');
const router = express.Router();
const PedidoController = require("../controllers/PedidoController.js");
const ProdutoController = require ("../controllers/ProdutoController.js");


router.get("/", PedidoController.GetAll);
router.get("/:numeroMesa", PedidoController.GetByMesa);
router.post("/", PedidoController.Insert);

router.get("/Produto", ProdutoController.get);
router.post("/Produto", ProdutoController.Insert);
router.put("/Produto/:id", ProdutoController.alterarProduto);
router.delete("/Produto/:codigo", ProdutoController.deleteProduto);

module.exports = router;