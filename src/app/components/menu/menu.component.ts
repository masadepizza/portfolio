import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Output() seccionClicada = new EventEmitter<string>();

  constructor(private router: Router){}


  cambiarIdioma(idioma: string){
    if (idioma === 'es') {
      this.router.navigate(['/app-portfolio']);
    } else if(idioma==='en') {
      this.router.navigate(['/app-portfolio-en']);
    }
  }

  irASeccion(seccion: string){
    this.seccionClicada.emit(seccion);
  }
}