import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Header } from "../base/header/header";

@Component({
  selector: 'app-model-eco',
  standalone: true, 
  imports: [CommonModule, Header],
  templateUrl: './model-eco.html',
  styleUrls: ['./model-eco.css'] 
})
export class ModelEco {
}