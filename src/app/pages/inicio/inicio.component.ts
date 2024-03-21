import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router){}

  cambiarIdioma(idioma: string){
    if (idioma === 'es') {
      this.router.navigate(['/app-inicio']);
    } else if(idioma==='en') {
      this.router.navigate(['/app-home']);
    }
  }
}
