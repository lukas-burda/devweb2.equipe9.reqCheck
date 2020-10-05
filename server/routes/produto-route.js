const express = require('express');
const router = express.Router();
const ProdutoController = require ("../controllers/ProdutoController.js");

router.get("/", ProdutoController.get);
router.post("/", ProdutoController.Insert);
router.put("/:id", ProdutoController.alterarProduto);
router.delete("/:codigo", ProdutoController.deleteProduto);

module.exports = router;