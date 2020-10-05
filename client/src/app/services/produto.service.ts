import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseURL = 'http://localhost:1234';

  constructor(private http: HttpClient) { }

  list(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.baseURL);
  }

  create(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.baseURL, produto);


  }

}
