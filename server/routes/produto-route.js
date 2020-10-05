const express = require('express');
const router = express.Router();
const ProdutoController = require ("../controllers/ProdutoController.js");

router.get("/", ProdutoController.get);
router.get("/:codigo", ProdutoController.getByCodigo);
router.post("/", ProdutoController.Insert);
router.put("/", ProdutoController.alterarProduto);
router.delete("/:codigo", ProdutoController.deleteProduto);

module.exports = router;