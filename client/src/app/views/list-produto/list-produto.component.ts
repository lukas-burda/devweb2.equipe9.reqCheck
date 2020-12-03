import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Produto} from 'src/app/models/Produto';
import { ProdutoService} from 'src/app/services/produto.service';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {

  produtosColumns: string[] = ["codigo", "nome", "valor", "botao"];
  dataSource = Produto;

  produto: Produto = {
    codigo: "",
    nome: "",
    valor: 0,
    quantidade: 0
    }
  produtos: Produto[] = [];

  listaProdutos : MatTableDataSource<Produto>= new MatTableDataSource<Produto>(this.produtos);

  constructor(private router:Router, private ProdutoService: ProdutoService) { }

  ngOnInit(): void {
    this.ProdutoService.list().subscribe((lista)=>{
      this.produtos = lista;
      this.listaProdutos = new MatTableDataSource<Produto>(this.produtos);
    });


  }

  delete(codigo: String): void{
    this.ProdutoService.delete(codigo).subscribe(()=>{
      window.location.reload();
    });
  }

  create(): void{
    this.ProdutoService.create(this.produto).subscribe(()=>{
      window.location.reload();
  });
  }

  update(): void{
    this.ProdutoService.update(this.produto).subscribe(()=>{
      window.location.reload();
    })
  }
}
