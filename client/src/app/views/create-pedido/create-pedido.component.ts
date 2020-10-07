import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/Pedido';
import { Produto } from 'src/app/models/Produto';
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
  


  constructor(private PedidoService: PedidoService, private ProdutoService: ProdutoService) { }

  ngOnInit(): void {
  }

  create(): void{
    this.PedidoService.create(this.pedido).subscribe(()=>{
      console.log(this.pedido);
      console.log("oi");
    });
  }
  }





