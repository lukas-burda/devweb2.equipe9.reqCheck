import { ActivatedRoute, Router } from '@angular/router';
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
    _id: "",
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

  constructor(
    private PedidoService: PedidoService, 
    private ProdutoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let numeromesa = this.route.snapshot.paramMap.get("numeromesa");
    if (numeromesa !== null) {
      this.PedidoService.getByMesa(numeromesa).subscribe((mesa) => {
        console.log(mesa)
        this.pedido.numeromesa = mesa.numeromesa;
        this.produtos = mesa.produtos;
        this.pedido.subtotal = mesa.subtotal;
        this.pedido.status = 'OCUPADA';
        this.pedido._id = mesa._id;
      });
    }

  }

  create(): void{
    console.log(this.pedido)
    this.pedido.produtos = this.produtos;
     if(this.pedido._id != null) {
      this.PedidoService.atualizar(this.pedido).subscribe(()=>{
      });
     } else {
      this.PedidoService.create(this.pedido).subscribe(()=>{
       });
     }
    
      window.location.href = "/pedido/lista";
  }

  getByCod(codigo: String, quant: number): void{

    var x = this.ProdutoService.getByCod(codigo).subscribe((prod)=>{
      if(this.produtos == null)
        this.produtos = [];
      let y = this.produtos.filter(produto => produto.codigo == codigo);
      if( y.length != 0 ) {
        y[0].quantidade = y[0].quantidade + quant;
        y[0].valor = y[0].quantidade * prod.valor;
      } else {
        prod.quantidade = quant;
        prod.valor = quant * prod.valor;
        this.produtos.push(prod);
        var VarQuant = prod.quantidade;
        var VarValor = prod.valor;
      }
    });
  }

  remByCod(codigo : String) : void{
    this.produtos = this.produtos.filter(produto => produto.codigo !== codigo);
    
  }
  }





