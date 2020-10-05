const Pedidos = require("../models/PedidoModel.js");

class PedidoController {
    async GetByMesa(req, res){
        res.status(201).json(await Pedidos.findOne({"numeromesa": req.params.numeroMesa}));
    }

    async GetAll(req,res){
        res.status(201).json(await Pedidos.find({}));
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
}

module.exports = new PedidoController();