import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { InformacionGeneralComponent } from './informacion-general/informacion-general.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { MatSidenavModule} from '@angular/material/sidenav';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosTerminadosComponent } from './proyectos-terminados/proyectos-terminados.component';
import { ProyectosProcesoComponent } from './proyectos-proceso/proyectos-proceso.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    InformacionGeneralComponent,
    SobreMiComponent,
    HabilidadesComponent,
    ProyectosTerminadosComponent,
    ProyectosProcesoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
