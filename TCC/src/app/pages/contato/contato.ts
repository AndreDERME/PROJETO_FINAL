import { Component } from '@angular/core';
import { Header } from "../base/header/header";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contato',
  imports: [Header, RouterLink],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {

}
