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

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    MenuComponent,
    MenuEnComponent,
    PortfolioComponent,
    PortfolioEnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
