import { Component } from '@angular/core';

@Component({
    selector: 'app-barra-lateral',
    templateUrl: './barra-lateral.component.html',
    styleUrls: ['./barra-lateral.component.sass'],
    standalone: false
})

export class BarraLateralComponent {
  
  switchState: boolean = true;
  isMenuExpanded: boolean = false;
  body = document.querySelector('body')
  itemActivo:string = 'elemento1';

  ngOnInit(): void { 
    const savedSwitchState = localStorage.getItem('switchState');
    this.switchState = savedSwitchState ? JSON.parse(savedSwitchState) : true;
    this.cargarEstilo()
  }
  
  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
    this.body?.classList.toggle('body-expanded')
  }

  modoOscuro(){
    if(!this.body?.classList.contains('modo-claro')){
      this.body?.classList.add('modo-claro')
    }else{
      this.body?.classList.toggle('modo-claro')
    }
    this.guardarEstilo(this.body?.classList.contains('modo-claro'))
  }

  guardarEstilo(value:any){
    localStorage.setItem('Modo-claro', value)
  }

  cargarEstilo(){
    const estilo = localStorage.getItem('Modo-claro')
    if(estilo === 'true'){
      this.body?.classList.toggle('modo-claro')
    }
  }
  
//  Para guardar el estado del sitch al dar click al modo oscuro
  toggleSwitch() {
    this.switchState = !this.switchState;
    localStorage.setItem('switchState', JSON.stringify(this.switchState));
  }

  cambiarElementoActivo(elemento: string) {
    this.itemActivo = elemento;
  }
}

