const express = require('express');
const router = express.Router();
const PedidoController = require("../controllers/PedidoController.js");

router.get("/", PedidoController.GetAll);
router.get("/:numeroMesa", PedidoController.GetByMesa);
router.post("/", PedidoController.Insert);
router.put("/", PedidoController.Update);
router.put("/Finalizar/:numeroMesa", PedidoController.Finalizar);


module.exports = router;