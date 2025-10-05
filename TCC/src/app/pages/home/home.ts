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

  // Array para o carrossel (3 carros principais)
  carrosCarousel = [
    {
      nome: 'EcoSport',
      ano: 2016,
      descricao: 'O Ford EcoSport é um SUV compacto, conhecido por seu porte pequeno e design versátil. Ele oferece diversas opções de motorização, incluindo versões 1.5 e 2.0, com câmbio manual ou automático, e opções de tração dianteira ou integral.',
      imagem: 'assets/ecosport.png'
    },
    {
      nome: 'FOCUS',
      ano: 2010,
      descricao: 'O Ford Focus MK2, especialmente a sua reestilização MK2.5 lançada no Brasil em 2008, é um carro conhecido pela boa dirigibilidade, robustez e um pacote de equipamentos de destaque, principalmente nas versões mais completas como a Titanium.',
      imagem: 'assets/focus.png'
    },
    {
      nome: 'FIESTA SEDAN',
      ano: 2016,
      descricao: 'O Ford Fiesta Sedan 2016, ou New Fiesta Sedan 2016, é elogiado pelo bom desempenho do motor 1.6 16V flex, conforto e praticidade. A linha 2016 trouxe novidades como a versão SE Plus com mais airbags, central multimídia MyFord Touch com tela de 6,5" e câmera de ré.',
      imagem: 'assets/Fiesta.png'
    }
  ];

  // Array para os cards de destaque (6 carros com mais informações)
  carros = [
    {
      nome: 'Ford EcoSport',
      ano: 2016,
      km: '52.000',
      preco: '45.900',
      descricao: 'O Ford EcoSport é um SUV compacto, conhecido por seu porte pequeno e design versátil. Ele oferece diversas opções de motorização, incluindo versões 1.5 e 2.0, com câmbio manual ou automático.',
      imagem: 'assets/ecosport.png'
    },
    {
      nome: 'Ford Focus',
      ano: 2010,
      km: '98.000',
      preco: '28.500',
      descricao: 'O Ford Focus MK2 é um carro conhecido pela boa dirigibilidade, robustez e um pacote de equipamentos de destaque, principalmente nas versões mais completas como a Titanium.',
      imagem: 'assets/focus.png'
    },
    {
      nome: 'Ford Fiesta Sedan',
      ano: 2016,
      km: '65.000',
      preco: '38.900',
      descricao: 'O Ford Fiesta Sedan 2016 é elogiado pelo bom desempenho do motor 1.6 16V flex, conforto e praticidade. A linha 2016 trouxe novidades como central multimídia MyFord Touch.',
      imagem: 'assets/Fiesta.png'
    },
    {
      nome: 'Ford Ka',
      ano: 2018,
      km: '42.000',
      preco: '35.900',
      descricao: 'Compacto, econômico e moderno. O Ford Ka é perfeito para quem busca praticidade no dia a dia urbano sem abrir mão do estilo. Motor 1.0 flex com excelente consumo.',
      imagem: 'assets/fordKa.png'
    },
    {
      nome: 'Ford Ranger',
      ano: 2019,
      km: '78.000',
      preco: '125.900',
      descricao: 'Picape robusta e versátil, ideal para trabalho e lazer. A Ford Ranger oferece potência, tecnologia e conforto. Motor diesel 3.2 com tração 4x4.',
      imagem: 'assets/fordRanger.png'
    },
    {
      nome: 'Ford Fusion',
      ano: 2015,
      km: '88.000',
      preco: '52.900',
      descricao: 'Sedã premium com design sofisticado e tecnologia de ponta. O Ford Fusion oferece conforto excepcional, motor potente e recursos avançados de segurança.',
      imagem: 'assets/fordFusion.png'
    }
  ];

  carroAtualIndex = 0;

  constructor() { }

  proximoCarro() {
    this.carroAtualIndex = (this.carroAtualIndex + 1) % this.carrosCarousel.length;
  }

  carroAnterior() {
    if (this.carroAtualIndex === 0) {
      this.carroAtualIndex = this.carrosCarousel.length - 1;
    } else {
      this.carroAtualIndex--;
    }
  }

}
