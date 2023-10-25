import { Component, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-visor-imagenes',
  templateUrl: './visor-imagenes.component.html',
  styleUrls: ['./visor-imagenes.component.sass'],
  standalone: true,
  imports: [MatSidenavModule, NgIf, MatButtonModule],
})

export class VisorImagenesComponent {
  showFiller = true;
  index : number = 0
  titulos : string[] = ['/assets/titulo.jpeg', '/assets/tituloAtras.jpeg']

  ver_imagen(indice:number){
    this.index=indice
  }
}
