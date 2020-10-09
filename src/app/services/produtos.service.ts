import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Produtos } from './../models/produtos';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = 'http://localhost:3000/produtos';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getProducts(): Observable<Produtos[]> {
    return this.httpClient.get<Produtos[]>(this.url).pipe(retry(2), catchError(this.handleError))
  }

  getProductsById(id: number): Observable<Produtos> {
    return this.httpClient.get<Produtos>(this.url + '/' + id).pipe(retry(2), catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //Erro ocorreu no lado do Client
      errorMessage = error.error.message;
    } else {
      //Erro ocorreu no lado do Servidor
      errorMessage = `Código do erro: ${error.status},` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
