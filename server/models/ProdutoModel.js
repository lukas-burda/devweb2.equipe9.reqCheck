'use strict';

const mongoose = require("mongoose");

const Produto = new mongoose.Schema({
    codigo: {
        type: String,
        required: [true, "O código do produto deve ser informado"],
    },
    nome: {
        type: String,
        required: [true, "O nome do produto deve ser informado."],
    },
    valor: {
        type: Number,
        required: [true, "O valor do produto deve ser informado."],
    }
});

module.exports = mongoose.model("Produtos", Produto);