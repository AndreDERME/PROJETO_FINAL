import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  // Credenciais fixas para demonstração (em produção, isso seria uma API)
  private validEmail = 'admin@fordcompany.com';
  private validPassword = 'admin123';

  /**
   * Realiza o login do usuário
   * @param email Email do usuário
   * @param password Senha do usuário
   * @returns true se login bem-sucedido, false caso contrário
   */
  login(email: string, password: string): boolean {
    // Verifica se as credenciais estão corretas
    if (email === this.validEmail && password === this.validPassword) {
      // Salva o estado de login no localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      return true;
    }
    return false;
  }

  /**
   * Realiza o logout do usuário
   */
  logout(): void {
    // Remove os dados de autenticação
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    
    // Redireciona para a página de login
    this.router.navigate(['/login']);
  }

  /**
   * Verifica se o usuário está logado
   * @returns true se logado, false caso contrário
   */
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  /**
   * Retorna o email do usuário logado
   * @returns Email do usuário ou null
   */
  getUserEmail(): string | null {
    return localStorage.getItem('userEmail');
  }
}