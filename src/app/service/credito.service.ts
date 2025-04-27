import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credito } from '../model/credito.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CreditoService {
  private api = 'http://localhost:8080/api/creditos';

  constructor(private http: HttpClient) {}

  buscarPorNfse(nfse: string): Observable<Credito[]> {
    return this.http.get<Credito[]>(`${this.api}/${nfse}`);
  }

  buscarPorNumeroCredito(credito: string): Observable<Credito> {
    return this.http.get<Credito>(`${this.api}/credito/${credito}`);
  }
}
