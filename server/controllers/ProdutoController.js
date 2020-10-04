const Produtos = require("../models/ProdutoModel.js");

class ProdutoController {
    async get(req, res){
        res.status(201).json(await Produtos.find({}));
    }

    async Insert(req, res){
        var existsProduto = await Produtos.exists({"codigo": req.body.codigo});
        if (existsProduto == false){
            res.status(201).json(await Produtos.create(req.body));
        }
        else{
            res.status(400).json({ "mensagem": "Esse produto já existe"});
        }
    }

    async alterarProduto(req, res){
        res.status(200).json(await Produtos.updateOne({"codigo": req.body.codigo, "nome": req.body.nome,
            "valor": req.body.valor}));
    }

    async deleteProduto(req, res){
        res.status(200).json(await Produtos.findOneAndDelete(req.params.codigo));
    }
}

module.exports = new ProdutoController();