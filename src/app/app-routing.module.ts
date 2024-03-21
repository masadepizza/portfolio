import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuEnComponent } from './components/menu-en/menu-en.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-inicio', pathMatch: 'full' },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-inicio', component: InicioComponent },
  { path: 'app-menu', component: MenuComponent },
  { path: 'app-menu-en', component: MenuEnComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
