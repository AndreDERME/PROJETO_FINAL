import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from "../base/header/header";

@Component({
  selector: 'app-contato',
  imports: [Header, RouterLink],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {

}
