const Pedidos = require("../models/PedidoModel.js");
<<<<<<< HEAD

class PedidoController {
    async GetByMesa(req, res){
        res.status(201).json(await Pedidos.findOne({"numeromesa": req.params.numeroMesa}));
=======
const Produtos = require("../models/ProdutoModel.js");

class PedidoController {
    async GetByMesa(req, res){
        res.status(201).json(await Pedidos.findOne({ "numeromesa": req.params.numeroMesa }));
>>>>>>> 05e377e0c9554f5b6aa7c57c20bb047647c87a8c
    }

    async Insert(req, res){
        var verificacao = await Pedidos.findOne({ "numeromesa": req.body.numeromesa });
        if (verificacao == null || verificacao.status == "FINALIZADA"){
            res.status(200).json(await Pedidos.create(req.body));
        }
        else{
            res.status(400).json({ "mensagem": "Essa mesa já está em uso."});
        }
    }

    async GetAll(req,res){
        res.status(201).json(await Pedidos.find({}));
    }
}

module.exports = new PedidoController();