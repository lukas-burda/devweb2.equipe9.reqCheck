import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto} from 'src/app/models/Produto';
import { ProdutoService} from 'src/app/services/produto.service';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private router:Router, private ProdutoService: ProdutoService) { }

  ngOnInit(): void {
    this.ProdutoService.list().subscribe((lista)=>{
      console.log(lista);
      this.produtos = lista;

    });
  }

}
