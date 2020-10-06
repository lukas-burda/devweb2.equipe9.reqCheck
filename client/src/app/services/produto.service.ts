import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseURL = 'http://localhost:9090/produto';

  constructor(private http: HttpClient) { }

  list(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.baseURL);
  }

  create(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.baseURL, produto);
  }



  delete(codigo: String): Observable<Produto>{
    return this.http.delete<Produto>(this.baseURL+'/delete/'+codigo);
  }


}
