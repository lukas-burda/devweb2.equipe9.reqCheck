const mongoose = require("mongoose");
const produto = require("./ProdutoPedidoModel.js");

const Pedido = new mongoose.Schema({
    numeromesa: {
        type: Number,
        required: [true, "O número da mesa deve ser informada."]
    },
    status: {
        type: String,
        enum: ["LIVRE", "OCUPADA", "FINALIZADA"],
        uppercase: true,
        required: [true, "Digite status da mesa (LIVRE/OCUPADA/FINALIZADA)."],
    },
    produtos: [produto],
    createDate: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Pedidos", Pedido);