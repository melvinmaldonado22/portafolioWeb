import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InformacionGeneralComponent } from './informacion-general/informacion-general.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

const routes: Routes = [

  {path: '', component: InformacionGeneralComponent},
  {path: 'portafolio', component: InformacionGeneralComponent},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: '**', redirectTo:'', pathMatch:'full'}, // cuando se coloque otra url no conocida redireccionará a la raiz principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
