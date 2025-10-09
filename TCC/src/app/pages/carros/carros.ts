import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from "../base/header/header";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carros',
  standalone: true,
  imports: [CommonModule, Header, RouterLink],
  templateUrl: './carros.html',
  styleUrl: './carros.css'
})
export class Carros {

  carros = [
    {
      nome: 'Ford EcoSport',
      ano: 2016,
      km: '52.000',
      preco: '65.000,00',
      badge: 'Popular',
      descricao: 'SUV compacto versátil com motor 1.5 ou 2.0, câmbio manual ou automático. Perfeito para cidade e estrada.',
      imagem: 'assets/ecosport.png',
      link: '/model-eco'
    },
    {
      nome: 'Ford Focus',
      ano: 2010,
      km: '98.000',
      preco: '38.500,00',
      badge: 'Econômico',
      descricao: 'Conhecido pela boa dirigibilidade e robustez. Versão Titanium com pacote completo de equipamentos.',
      imagem: 'assets/focus.png',
      link: '/model-focus'
    },
    {
      nome: 'Ford Fiesta ',
      ano: 2016,
      km: '65.000',
      preco: '42.900,00',
      badge: 'Conforto',
      descricao: 'Motor 1.6 16V flex com ótimo desempenho. Central multimídia MyFord Touch e câmera de ré.',
      imagem: 'assets/Fiesta.png',
      link: '/model-feista'
    },
    {
      nome: 'Ford Ka',
      ano: 2018,
      km: '42.000',
      preco: '37.000,00',
      badge: 'Urbano',
      descricao: 'Compacto, econômico e moderno. Motor 1.0 flex ideal para o dia a dia na cidade.',
      imagem: 'assets/fordKa.png',
      link: '/model-ford-ka'
    },
    {
      nome: 'Ford Fusion',
      ano: 2015,
      km: '88.000',
      preco: '78.900,00',
      badge: 'Premium',
      descricao: 'Sedã sofisticado com tecnologia de ponta, conforto excepcional e recursos avançados de segurança.',
      imagem: 'assets/fordFusion.png',
      link: '/model-fusion'
    },
    {
      nome: 'Ford Flashback',
      ano: 1967,
      km: '12.000',
      preco: '135.000,00',
      badge: 'Clássico',
      descricao: 'Lendário superesportivo. Ícone das pistas com design atemporal e performance incomparável.',
      imagem: 'assets/fordGt.png',
      link: '/model-gt'
    },
    {
      nome: 'Ford Taunus',
      ano: 1982,
      km: '85.000',
      preco: '14.000,00',
      badge: 'Vintage',
      descricao: 'Clássico brasileiro dos anos 80. Perfeito para colecionadores e amantes de carros antigos.',
      imagem: 'assets/fordTanus.png',
      link: '/model-taunus'
    },
    {
      nome: 'Ford Mustang GT',
      ano: 2020,
      km: '15.000',
      preco: '350.000,00',
      badge: 'Esportivo',
      descricao: 'Muscle car americano com motor V8 5.0L. Potência bruta e design icônico.',
      imagem: 'assets/fordMustang.png',
      link: '/model-mustang'
    },
    {
      nome: 'Ford F-150 XL',
      ano: 2021,
      km: '35.000',
      preco: '180.000,00',
      badge: 'Trabalho',
      descricao: 'Picape full-size robusta e confiável. Ideal para trabalho pesado e aventuras off-road.',
      imagem: 'assets/fordxl.png',
      link: '/ford150-xl'
    },
    {
      nome: 'Ford Edge',
      ano: 2017,
      km: '72.000',
      preco: '45.000,00',
      badge: 'SUV',
      descricao: 'SUV médio com espaço interno generoso, tecnologia e conforto para toda a família.',
      imagem: 'assets/fordEdge.png',
      link: '/model-edge'
    },
    {
      nome: 'Ford F-150',
      ano: 2019,
      km: '48.000',
      preco: '140.000,00',
      badge: 'Potência',
      descricao: 'A picape mais vendida dos EUA. Capacidade de carga impressionante e tecnologia de ponta.',
      imagem: 'assets/fordF150.png',
      link: '/ford150'
    },
    {
      nome: 'Ford Courier',
      ano: 2012,
      km: '125.000',
      preco: '32.000,00',
      badge: 'Utilitário',
      descricao: 'Picape compacta econômica e prática. Perfeita para pequenos negócios e uso urbano.',
      imagem: 'assets/fordCurier.png',
      link: '/fordcourier'
    }
  ];

}
