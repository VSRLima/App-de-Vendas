import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Venda } from './../models/venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  url = 'http://localhost:3000/vendas';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getVendas(): Observable<Venda[]> {
    return this.httpClient.get<Venda[]>(this.url).pipe(retry(2), catchError(this.handleError))
  }

  getVendasById(id: number): Observable<Venda> {
    return this.httpClient.get<Venda>(this.url + '/' + id).pipe(retry(2), catchError(this.handleError))
  }

  saveVenda(vendas: Venda): Observable<Venda> {
    return this.httpClient.post<Venda>(this.url, JSON.stringify(vendas), this.httpOptions).pipe(retry(2), catchError(this.handleError))
  }

  updateVenda(vendas: Venda): Observable<Venda> {
    return this.httpClient.put<Venda>(this.url +'/' + vendas.id, JSON.stringify(vendas), this.httpOptions).pipe(retry(1), catchError(this.handleError))
  }

  deleteVenda(vendas: Venda) {
    return this.httpClient.delete<Venda>(this.url +'/' + vendas.id, this.httpOptions).pipe(retry(1), catchError(this.handleError))
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
