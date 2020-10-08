import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { Pedido } from './../../models/Pedido';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from '../../services/pedido.service'

@Component({
  selector: 'app-update-pedido',
  templateUrl: './update-pedido.component.html',
  styleUrls: ['./update-pedido.component.css']
})
export class UpdatePedidoComponent implements OnInit {

  pedidos: Pedido[] = [];
  produto: Produto = {
    codigo: "",
    nome: "",
    valor: 0,
    quantidade: 0
    }
  produtos: Produto[] = [];


  constructor(private router:Router, private PedidoService: PedidoService, private ProdutoService: ProdutoService)  { }

  ngOnInit(): void {
  }

}
