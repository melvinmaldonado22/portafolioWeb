import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VisorImagenesComponent } from '../visor-imagenes/visor-imagenes.component';
import { DatosService } from '../datos.service';
@Component({
  selector: 'app-informacion-general',
  templateUrl: './informacion-general.component.html',
  styleUrls: ['./informacion-general.component.sass']
})
export class InformacionGeneralComponent {
  constructor(public dialog: MatDialog, private DatosService:DatosService) {}
  opcion : string[] = ['titulo','certificado','otro'] 

  abrirVisor(opcion:string){
    this.DatosService.enviarMensaje(opcion)
    this.dialog.open(VisorImagenesComponent)
  }
}
