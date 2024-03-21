import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MenuEnComponent } from './components/menu-en/menu-en.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    MenuComponent,
    SobreMiComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ExperienciaComponent,
    EducacionComponent,
    ContactoComponent,
    MenuEnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
