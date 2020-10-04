const Produtos = require("../models/ProdutoModel.js");

class ProdutoController {
    async Insert(req, res){
        res.status(200).json(await Produtos.create(req.body));
    }
}

module.exports = new ProdutoController();