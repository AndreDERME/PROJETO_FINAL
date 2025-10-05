import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true; // Controla a visibilidade da senha
  isLoading = false; // Controla o estado de carregamento
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Se já estiver logado, redireciona para home
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;
    
    const { email, password } = this.loginForm.value;

    // Simula um pequeno delay (como se fosse uma chamada de API)
    setTimeout(() => {
      const success = this.authService.login(email, password);
      
      this.isLoading = false;
      
      if (success) {
        // Login bem-sucedido - redireciona para home
        this.router.navigate(['/']);
      } else {
        // Login falhou - mostra mensagem de erro
        this.errorMessage = 'Email ou senha inválidos. Tente: admin@fordcompany.com / admin123';
      }
    }, 800);
  }
}
