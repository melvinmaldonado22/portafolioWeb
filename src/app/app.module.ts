import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { InformacionGeneralComponent } from './informacion-general/informacion-general.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    InformacionGeneralComponent,
    SobreMiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
