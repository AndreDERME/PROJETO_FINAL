import { Component } from '@angular/core';
import { Header } from "../base/header/header";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carros',
  imports: [Header, RouterLink],
  templateUrl: './carros.html',
  styleUrl: './carros.css'
})
export class Carros {

}
