import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { ListProdutoComponent } from './views/list-produto/list-produto.component';

const routes: Routes = [
{
  path: '',
  component: IndexComponent
},
{
  path: 'produto/lista',
  component: ListProdutoComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
