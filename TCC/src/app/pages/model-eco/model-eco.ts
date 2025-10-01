// DENTRO DO ARQUIVO model-eco.ts (ou model-eco.component.ts)

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-model-eco',
  standalone: true,
  imports: [CommonModule], // REMOVEMOS O HEADER SÓ PARA ESTE TESTE
  
  // Usaremos um template direto no código para eliminar outras possíveis falhas
  template: `
    <div style="color: white; padding: 50px;">
      <h1>TESTE DA PÁGINA ECOSPORT</h1>
      <h2>Se você está vendo esta mensagem, a rota FUNCIONOU!</h2>
    </div>
  `
})
export class ModelEco {
  constructor() { }
}