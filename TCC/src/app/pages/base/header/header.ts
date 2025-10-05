import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [RouterLink, CommonModule], 
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isDropdownOpen = false;

  constructor(private authService: AuthService) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    if (confirm('Tem certeza que deseja sair?')) {
      this.authService.logout();
    }
  }

  // Fecha o menu ao clicar fora
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isDropdownOpen = false;
    }
  }
}
