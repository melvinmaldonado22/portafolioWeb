import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private mensajeFuente = new BehaviorSubject<string>('titulo');
  mensageActual = this.mensajeFuente.asObservable();

  enviarMensaje(mensaje:string){
    this.mensajeFuente.next(mensaje);
  }

}
