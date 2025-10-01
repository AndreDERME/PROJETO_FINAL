import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from "../base/header/header";
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Header, RouterLink], 
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class HomeComponent {

  carros = [
    {
      nome: 'EcoSport',
      ano: 2016,
      descricao: 'O Ford EcoSport é um SUV compacto, conhecido por seu porte pequeno e design versátil. Ele oferece diversas opções de motorização, incluindo versões 1.5 e 2.0, com câmbio manual ou automático, e opções de tração dianteira ou integral.',
      imagem: 'assets/ecosport.png'
    },
    {
      nome: 'FOCUS',
      ano: 2010,
      descricao: 'O Ford Focus MK2, especialmente a sua reestilização MK2.5 lançada no Brasil em 2008, é um carro conhecido pela boa dirigibilidade, robustez e um pacote de equipamentos de destaque, principalmente nas versões mais completas como a Titanium. Oferecido com os motores Duratec 2.0 a gasolina (e depois Flex) e o Sigma 1.6 Flex.',
      imagem: 'assets/focus.png'
    },
    {
      nome: 'FIESTA SEDAN',
      ano: 2016,
      descricao: 'O Ford Fiesta Sedan 2016, ou New Fiesta Sedan 2016, é elogiado pelo bom desempenho do motor 1.6 16V flex, conforto e praticidade. A linha 2016 trouxe novidades como a versão SE Plus com mais airbags, central multimídia MyFord Touch com tela de 6,5” e câmera de ré nas versões mais caras.',
      imagem: 'assets/Fiesta.png'
    }
  ];

  
  carroAtualIndex = 0;

  constructor() { }

  proximoCarro() {

    this.carroAtualIndex = (this.carroAtualIndex + 1) % this.carros.length;
  }

  carroAnterior() {
    if (this.carroAtualIndex === 0) {
      this.carroAtualIndex = this.carros.length - 1;
    } else {
      this.carroAtualIndex--;
    }
  }
    getLinkParaCarro(nome: string): string {
    switch (nome.toUpperCase()) {
      case 'ECOSPORT':
        return '/model-eco';
      case 'FIESTA SEDAN':

        return '/model-feista'; 
      case 'FOCUS':
        return '/model-focus';
      default:
        return '/';
    }
  }
}
