import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { ListPedidoComponent } from './views/list-pedido/list-pedido.component';
import { ListProdutoComponent } from './views/list-produto/list-produto.component';
import { CreatePedidoComponent } from './views/create-pedido/create-pedido.component';
import { CreateProdutoComponent } from './views/create-produto/create-produto.component';
import { UpdateProdutoComponent } from './views/update-produto/update-produto.component';

const routes: Routes = [
{
  path: 'index',
  component: IndexComponent
},
{
  path: 'produto/lista',
  component: ListProdutoComponent
},
{
  path: 'pedido/lista',
  component: ListPedidoComponent
},
{
  path: 'pedido/create',
  component: CreatePedidoComponent
},
{
  path: 'produto/create',
  component: CreateProdutoComponent
},
{
  path: 'lista/update',
  component: UpdateProdutoComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
