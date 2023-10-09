import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionGeneralComponent } from './informacion-general/informacion-general.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosTerminadosComponent } from './proyectos-terminados/proyectos-terminados.component';
import { ProyectosProcesoComponent } from './proyectos-proceso/proyectos-proceso.component';

const routes: Routes = [

  {path: '', component: InformacionGeneralComponent},
  {path: 'portafolio', component: InformacionGeneralComponent},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'proyectos-terminados', component: ProyectosTerminadosComponent},
  {path: 'proyectos-en-proceso', component: ProyectosProcesoComponent},
  {path: '**', redirectTo:'', pathMatch:'full'}, // cuando se coloque otra url no conocida redireccionará a la raiz principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
