import { Produto } from './../../models/Produto';
import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/Pedido';
import { PedidoService} from 'src/app/services/pedido.service';
import { ProdutoService} from 'src/app/services/produto.service';


@Component({
  selector: 'app-create-pedido',
  templateUrl: './create-pedido.component.html',
  styleUrls: ['./create-pedido.component.css']
})
export class CreatePedidoComponent implements OnInit {

  pedido: Pedido = {
    numeromesa: "",
    subtotal: 0,
    status: "ocupada",
    produtos: [
      {
      codigo: "",
      nome: "",
      valor: 0,
      quantidade: 0
    },
    ]
  }

  produto: Produto = {
    codigo: "",
    nome: "",
    valor: 0,
    quantidade: 0
    }
  
  produtos: Produto[] = [];

  constructor(private PedidoService: PedidoService, private ProdutoService: ProdutoService) { }

  ngOnInit(): void {
  }

  create(): void{
    this.pedido.produtos = this.produtos;
    this.PedidoService.create(this.pedido).subscribe(()=>{
    });
    window.location.href = "localhost:9090/pedido/lista";
  }

  getByCod(codigo: String, quant: Number): void{
    
    var x = this.ProdutoService.getByCod(codigo).subscribe((prod)=>{
      prod.quantidade = quant;
      this.produtos.push(prod);
    });
    
  }

  remByCod() : void{
    this.produtos.pop()
    
  }
  }





