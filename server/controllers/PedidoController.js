const Pedidos = require("../models/PedidoModel.js");
const Produtos = require("../models/ProdutoModel.js");

class PedidoController {
    async Insert(req, res){
        var verificacao = await Pedidos.findOne({ "numeromesa": req.body.numeromesa, "status": "ocupada" });
        if (verificacao == null || verificacao.status == "FINALIZADA"){
            var subtotal = 0;
            req.body.produtos.forEach(element => {
                subtotal += element.valor * element.quantidade;
            });
            req.body.subtotal = subtotal;
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
        var subtotal = 0;
        req.body.produtos.forEach(element => {
            subtotal += element.valor * element.quantidade;
        });
        req.body.subtotal = subtotal;
        var pedido = await Pedidos.findOne({ "numeromesa": req.body.numeromesa, "status": "ocupada" });
        console.log(req.body);
        if (pedido != null){
            res.status(200).json(await Pedidos.updateOne({ "numeromesa": req.body.numeromesa, "status": "ocupada" }, req.body));
        }
    }

    async Finalizar(req, res){
        var pedido = await Pedidos.findOne({ "numeromesa": req.params.numeroMesa, "status": "ocupada" });
        console.log(pedido);
        var total = 0;
        if (pedido != null){
            pedido.produtos.forEach(element => {
                var aux = element.valor * element.quantidade;
                total += aux;
            });
        
            var pedido = await Pedidos.updateOne({ "numeromesa": req.params.numeroMesa, "status": "ocupada" }, { "status": "finalizada"});
            
            res.status(200).json({ "total": `${total}` });
        }
        else{
            res.status(404).json({ "Mensagem": "Pedido não encontrado." })
        }
    }
}

module.exports = new PedidoController();