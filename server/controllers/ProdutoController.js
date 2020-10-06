const Produtos = require("../models/ProdutoModel.js");

class ProdutoController {
    async get(req, res){
        res.status(201).json(await Produtos.find({}));
    }
    async getByCodigo(req, res){
        res.status(201).json(await Produtos.findOne({"codigo": req.params.codigo}));
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
        res.status(200).json(await Produtos.updateOne(req.body));
    }

    async deleteProduto(req, res){
        res.status(200).json(await Produtos.findOneAndDelete( {"codigo": req.params.codigo} ));
    }
}

module.exports = new ProdutoController();