import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../base/header/header';

@Component({
  selector: 'app-privacidade',
  standalone: true,
  imports: [RouterLink, Header],
  templateUrl: './privacidade.html',
  styleUrl: './privacidade.css'
})
export class Privacidade implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Só executa no browser, não no servidor
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
}