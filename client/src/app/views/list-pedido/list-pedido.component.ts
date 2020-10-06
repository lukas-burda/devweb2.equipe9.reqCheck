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

  pedidos: Pedido[] = [];

  constructor(private router:Router, private PedidoService: PedidoService) { }

  ngOnInit(): void {
    this.PedidoService.list().subscribe((lista)=>{
      this.pedidos = lista;
    });
  }

  finalizar(pedido: String): void{
    this.PedidoService.finalizar(pedido).subscribe(()=>{
      window.location.reload();
    });
  }

}
