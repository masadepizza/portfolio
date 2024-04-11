import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuEnComponent } from './components/menu-en/menu-en.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PortfolioEnComponent } from './pages/portfolio-en/portfolio-en.component';
import { CardSkillsComponent } from './components/card-skills/card-skills.component';
import { CardEducacionComponent } from './components/card-educacion/card-educacion.component';
import { CardExpComponent } from './components/card-exp/card-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    MenuComponent,
    MenuEnComponent,
    PortfolioComponent,
    PortfolioEnComponent,
    CardSkillsComponent,
    CardEducacionComponent,
    CardExpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
