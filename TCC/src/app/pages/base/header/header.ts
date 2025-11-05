import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [RouterLink, CommonModule], 
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isDropdownOpen = false;
  isMenuOpen = false; // Adicionado para controlar o menu hambúrguer

 

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMenu() { // Adicionado para alternar o estado do menu hambúrguer
    this.isMenuOpen = !this.isMenuOpen;
  }



  // Fecha o menu ao clicar fora
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isDropdownOpen = false;
    }
    // Adicionado para fechar o menu hambúrguer ao clicar fora
    if (!target.closest('.hamburger-menu') && !target.closest('nav')) {
      this.isMenuOpen = false;
    }
  }
}
