const mongoose = require("mongoose");

const Produto = new mongoose.Schema({
    codigo: {
        type: String,
        required: [true, "O código do produto deve ser informado"],
    },
    quantidade: {
        type: Number,
        required: [true, "A quantidade do produto deve ser informado."],
    }
});

module.exports = Produto;