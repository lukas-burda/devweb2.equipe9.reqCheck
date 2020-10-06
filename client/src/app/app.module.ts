import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { ListProdutoComponent } from './views/list-produto/list-produto.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListPedidoComponent } from './views/list-pedido/list-pedido.component';
import { CreateProdutoComponent } from './views/create-produto/create-produto.component';
import { CreatePedidoComponent } from './views/create-pedido/create-pedido.component';
import { UpdateProdutoComponent } from './views/update-produto/update-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ListProdutoComponent,
    ListPedidoComponent,
    CreateProdutoComponent,
    CreatePedidoComponent,
    UpdateProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
