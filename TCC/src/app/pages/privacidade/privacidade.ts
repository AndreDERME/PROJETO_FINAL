import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../base/header/header';

@Component({
  selector: 'app-privacidade',
  standalone: true,
  imports: [RouterLink, Header],
  templateUrl: './privacidade.html',
  styleUrl: './privacidade.css'
})
export class Privacidade {
  constructor() {
    // Scroll to top ao carregar a página
    window.scrollTo(0, 0);
  }
}
