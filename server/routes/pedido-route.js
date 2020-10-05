const express = require('express');
const router = express.Router();
const PedidoController = require("../controllers/PedidoController.js");


router.get("/:numeroMesa", PedidoController.GetByMesa);
router.post("/", PedidoController.Insert);

module.exports = router;