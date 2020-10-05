import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { ListPedidoComponent } from './views/list-pedido/list-pedido.component';
import { ListProdutoComponent } from './views/list-produto/list-produto.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
