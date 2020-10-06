import { Pedido } from './../models/Pedido';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
    providedIn: 'root'
  })
export class PedidoService {
    baseURL = 'http://localhost:9090/pedido';

    constructor(private http: HttpClient) { }

    list(): Observable<Pedido[]>{
        return this.http.get<Pedido[]>(this.baseURL);
        }
    
    create(pedido: Pedido):Observable<Pedido>{
        return this.http.post<Pedido>(this.baseURL, pedido);
    }

    finalizar(pedido: String): Observable<Pedido>{
        console.log(pedido);
        return this.http.put<Pedido>(this.baseURL+'/finalizar/'+pedido, null);
    }

    }