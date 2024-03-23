import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuEnComponent } from './components/menu-en/menu-en.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PortfolioEnComponent } from './pages/portfolio-en/portfolio-en.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-inicio', pathMatch: 'full' },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-inicio', component: InicioComponent },
  { path: 'app-menu', component: MenuComponent },
  { path: 'app-menu-en', component: MenuEnComponent },
  { path: 'app-portfolio', component: PortfolioComponent },
  { path: 'app-portfolio-en', component: PortfolioEnComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
