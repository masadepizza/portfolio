import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-en',
  templateUrl: './menu-en.component.html',
  styleUrl: './menu-en.component.css'
})
export class MenuEnComponent {

  constructor(private router: Router){}

  cambiarIdioma(idioma: string){
    if (idioma === 'es') {
      this.router.navigate(['/app-portfolio']);
    } else if(idioma==='en') {
      this.router.navigate(['/app-portfolio-en']);
    }
  }

}
