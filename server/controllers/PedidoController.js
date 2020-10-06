const Pedidos = require("../models/PedidoModel.js");
const Produtos = require("../models/ProdutoModel.js");

class PedidoController {
    async Insert(req, res){
        var verificacao = await Pedidos.findOne({ "numeromesa": req.body.numeromesa, "status": "ocupada" });
        if (verificacao == null || verificacao.status == "FINALIZADA"){
            res.status(200).json(await Pedidos.create(req.body));
        }
        else{
            res.status(400).json({ "mensagem": "Essa mesa já está em uso."});
        }
    }

    async GetByMesa(req, res){
        res.status(201).json(await Pedidos.findOne({"numeromesa": req.params.numeroMesa, "status": "ocupada" }));
    }

    async GetAll(req, res){
        res.status(201).json(await Pedidos.find({}));
    }

    async Update(req,res){
        res.status(200).json(await Pedidos.updateOne(req.body));
    }

    async Finalizar(req, res){
        var pedido = await Pedidos.findOne({ "numeromesa": req.params.numeroMesa, "status": "ocupada" });
        pedido.status = "FINALIZADA";
        var total = 0;
        pedido.produtos.forEach(element => {
            var aux = element.valor * element.quantidade;
            total += aux;
        });
        await Pedidos.updateOne(pedido);
        res.status(200).json({ "total": `${total}` });
    }
}

module.exports = new PedidoController();