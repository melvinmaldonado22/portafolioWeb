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
    titulo1: '/assets/titulos/titulo.jpeg',
    titulo2: '/assets/titulos/tituloAtras.jpeg'
  };
  certificados: { [key: string]: string } = {
    titulo1: '/assets/titulos/Certificado_JavaScript.jpg',
    titulo2: '/assets/titulos/Certificado_INFOP_Python.jpg',
    titulo3: '/assets/titulos/CertificadoOracle.jpg',
    titulo4: '/assets/titulos/Certificado_INFOP_MySQL.jpg',
    titulo5: '/assets/titulos/Certificado_intro_ciberseguridad.jpg',
    titulo6: '/assets/titulos/Certificado_Seguridad_Essentials.jpg'
  };
  complementos: { [key: string]: string } = {
    titulo1: '/assets/titulos/Certificado_Get_Connect.jpg',
    titulo2: '/assets/titulos/Certificado_Mant1.jpg',
    titulo3: '/assets/titulos/Certificado_Mant2.jpg',
    titulo4: '/assets/titulos/Certificado_Mant3.jpg',
    titulo5: '/assets/titulos/Certificado_IE1.jpg',
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
