import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Venda } from './../models/venda';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class VendaService {

  url = 'http://localhost:3000/vendas';

  constructor(private httpClient: HttpClient) { }

  getVendas(): Observable<Venda[]> {
    return this.httpClient.get<Venda[]>(this.url).pipe(retry(2), catchError(this.handleError))
  }

  getVendasById(id: number): Observable<Venda> {
    return this.httpClient.get<Venda>(this.url + '/' + id).pipe(retry(2), catchError(this.handleError))
  }

  saveVenda(vendas): Observable<Venda> {
    return this.httpClient.post<Venda>(this.url, vendas, httpOptions).pipe(retry(2), catchError(this.handleError))
  }

  updateVenda(id, produto): Observable<any> {
    const url = `${this.url}/${id}`
    return this.httpClient.put(url, produto, httpOptions).pipe(retry(1), catchError(this.handleError))
  }

  deleteVenda(id) {
    const url = `${this.url}/${id}`
    return this.httpClient.delete<Venda>(url, httpOptions).pipe(retry(1), catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      //Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status},` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
