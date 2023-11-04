import { Component, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf, NgFor} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visor-imagenes',
  templateUrl: './visor-imagenes.component.html',
  styleUrls: ['./visor-imagenes.component.sass'],
  standalone: true,
  imports: [MatSidenavModule, NgIf, NgFor, MatButtonModule, CommonModule],
})

export class VisorImagenesComponent {
  showFiller = true;
  index : number = 0;
  titulos: { [key: string]: string } = {
    titulo1: '/assets/titulo.jpeg',
    titulo2: '/assets/tituloAtras.jpeg'
  };
  certificados: { [key: string]: string } = {
    titulo1: '/assets/certificado-mini.jpg',
    titulo2: '/assets/certificado-mini.jpg'
  };
  complementos: { [key: string]: string } = {
    titulo1: '/assets/titulo.jpeg',
    titulo2: '/assets/tituloAtras.jpeg'
  };
  categoria = this.titulos
  ver_imagen(indice:number){
    this.index=indice;
  }
}
