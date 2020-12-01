import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { Pedido } from './../../models/Pedido';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from '../../services/pedido.service'


@Component({
  selector: 'app-list-pedido',
  templateUrl: './list-pedido.component.html',
  styleUrls: ['./list-pedido.component.css']
})

export class ListPedidoComponent implements OnInit {

  panelOpenState = false;

  pedidos: Pedido[] = [];
  produto: Produto = {
    codigo: "",
    nome: "",
    valor: 0,
    quantidade: 0
    }
  produtos: Produto[] = [];

  constructor(private router:Router, private PedidoService: PedidoService, private ProdutoService: ProdutoService) { }

  ngOnInit(): void {
    this.PedidoService.list().subscribe((lista)=>{
      this.pedidos = lista;
    });

    this.ProdutoService.list().subscribe((lista)=>{
      this.produtos = lista;
    });
  }

  finalizar(pedido: String): void{
    this.PedidoService.finalizar(pedido).subscribe(()=>{
      window.location.reload();
    });
  }

  atualizar():void{
    //this.router.navigate(['pedido/update']);
  }
}
