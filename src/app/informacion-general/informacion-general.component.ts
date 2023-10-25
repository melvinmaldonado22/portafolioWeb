import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VisorImagenesComponent } from '../visor-imagenes/visor-imagenes.component';
@Component({
  selector: 'app-informacion-general',
  templateUrl: './informacion-general.component.html',
  styleUrls: ['./informacion-general.component.sass']
})
export class InformacionGeneralComponent {
  constructor(public dialog: MatDialog) {}
  opcion : string[] = ['titulo','certificado','otro'] 
  abrirVisor(indice:number){
    console.log(this.opcion[indice]);
    this.dialog.open(VisorImagenesComponent)
  }
}
