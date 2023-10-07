import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.sass']
})

export class BarraLateralComponent {
  
  switchState: boolean = false;
  isMenuExpanded = false;
  body = document.querySelector('body')

  ngOnInit(): void { 
    const savedSwitchState = localStorage.getItem('switchState');
    this.switchState = savedSwitchState ? JSON.parse(savedSwitchState) : false;
    this.cargarEstilo()
  }
  
  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
    this.body?.classList.toggle('body-expanded')
  }

  modoOscuro(){
    this.body?.classList.toggle('modo-oscuro')
    this.guardarEstilo(!this.body?.classList.contains('modo-oscuro'))
  }

  guardarEstilo(value:any){
    localStorage.setItem('Modo-oscuro', value)
  }

  cargarEstilo(){
    const estilo = localStorage.getItem('Modo-oscuro')
    if(estilo === 'true'){
      this.body?.classList.toggle('modo-oscuro')
    }
  }
  
//  Para guardar el estado del sitch al dar click al modo oscuro
  toggleSwitch() {
    this.switchState = !this.switchState;
    localStorage.setItem('switchState', JSON.stringify(this.switchState));
  }
}

