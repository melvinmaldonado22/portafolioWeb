import { Component, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf, NgFor} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { DatosService } from '../datos.service';

type OpcionesImagenes = {
  [key: string]: string;
};

@Component({
  selector: 'app-visor-imagenes',
  templateUrl: './visor-imagenes.component.html',
  styleUrls: ['./visor-imagenes.component.sass'],
  standalone: true,
  imports: [MatSidenavModule, NgIf, NgFor, MatButtonModule, CommonModule],
})

export class VisorImagenesComponent {
  
  msj: string = '';
  op:OpcionesImagenes = {};
  constructor(private DatosService:DatosService) {
    this.DatosService.mensageActual.subscribe((mensaje)=>(this.msj=mensaje))
    this.mostrarTitulos(this.msj)
  }

  titulos: { [key: string]: string } = {
    titulo1: '/assets/titulos/titulo.webp',
    titulo2: '/assets/titulos/tituloAtras.webp'
  };
  certificados: { [key: string]: string } = {
    titulo1: '/assets/titulos/Certificado_JavaScript.webp',
    titulo2: '/assets/titulos/Certificado_Flutter.webp',
    titulo3: '/assets/titulos/Certificado_INFOP_Python.webp',
    titulo4: '/assets/titulos/CertificadoOracle.webp',
    titulo5: '/assets/titulos/Certificado_INFOP_MySQL.webp',
    titulo6: '/assets/titulos/Certificado_intro_ciberseguridad.webp',
    titulo7: '/assets/titulos/Certificado_Seguridad_Essentials.webp'
  };
  complementos: { [key: string]: string } = {
    titulo1: '/assets/titulos/Certificado_Get_Connect.webp',
    titulo2: '/assets/titulos/Certificado_Mant1.webp',
    titulo3: '/assets/titulos/Certificado_Mant2.webp',
    titulo4: '/assets/titulos/Certificado_Mant3.webp',
    titulo5: '/assets/titulos/Certificado_IE1.webp',
  };

mostrarTitulos(opcion:string){
  switch (opcion) {
    case 'titulo':
      this.op=this.titulos;
    break;
    case 'certificado':
      this.op=this.certificados;
    break;
    case 'otro':
      this.op=this.complementos;
    break;
    default:
      break;
  }
}

}
