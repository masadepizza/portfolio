import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router){}

  cambiarIdioma(idioma: string){
    if (idioma === 'es') {
      this.router.navigate(['/app-menu']);
    } else if(idioma==='en') {
      this.router.navigate(['/app-menu-en']);
    }
  }
}