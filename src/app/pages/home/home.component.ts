import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router){}

  cambiarIdioma(idioma: string){
    if (idioma === 'es') {
      this.router.navigate(['/app-inicio']);
    } else if(idioma==='en') {
      this.router.navigate(['/app-home']);
    }
  }
}