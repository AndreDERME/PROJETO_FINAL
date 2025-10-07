import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Verifica se o usuário está logado (existe token no localStorage)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (isLoggedIn) {
    return true; // Permite acesso
  } else {
    // Redireciona para login
    router.navigate(['/login']);
    return false; // Bloqueia acesso
  }
};