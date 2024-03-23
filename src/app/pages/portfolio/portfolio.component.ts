import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  constructor(private elRef:ElementRef){}

  irALinkedIn(): void {
    window.open('https://www.linkedin.com/in/mabel-san-rom%C3%A1n-fuentes-a7498a1b2/', '_blank');
  }
  
  irASeccion(seccion: string) {
    let element = this.elRef.nativeElement.querySelector(`#${seccion}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
