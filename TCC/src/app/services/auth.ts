import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): Observable<boolean> {
    // Simula uma chamada de API
    // Em um projeto real, aqui você faria uma requisição HTTP
    if (email === 'teste@email.com' && password === 'senha123') {
      // Retorna sucesso após um pequeno atraso para simular a rede
      return of(true).pipe(delay(500));
    } else {
      // Retorna falha
      return of(false).pipe(delay(500));
    }
  }
}
