import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

//fotos cards skills

  fotosCard1: string[]= ['../../../assets/html.png', '../../../assets/css.png', 
    '../../../assets/javascript.png', '../../../assets/typescript.png', 
    '../../../assets/java.png'];
  fotosCard2: string[]= ['../../../assets/angular.png', '../../../assets/bootstrap.png', 
    '../../../assets/jquery.png'];
  fotosCard3: string[]= ['../../../assets/mysql.png', '../../../assets/mongo.png'];
  fotosCard4: string[]= ['../../../assets/figma.png', '../../../assets/visualstudio.png', 
    '../../../assets/node.png', '../../../assets/springboot.png', 
    '../../../assets/postman.png', '../../../assets/github2.png', '../../../assets/agile.png'];


  tecnologiasCard1: string[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java'];
  tecnologiasCard2: string[] = ['Angular', 'Bootstrap', 'jQuery'];
  tecnologiasCard3: string[] = ['MySQL', 'MongoDB'];
  tecnologiasCard4: string[] = ['Figma', 'VS Code', 'Node.js', 'Spring Boot', 'Postman', 'Github', 'Metodologías Ágiles'];


  constructor(private elRef:ElementRef){}

  irALinkedIn(): void {
    window.open('https://www.linkedin.com/in/mabel-san-rom%C3%A1n-fuentes-a7498a1b2/', '_blank');
  }

  irAGithub(): void {
    window.open('https://github.com/masadepizza', '_blank');
  }
  
  //scroll a secciones
  irASeccion(seccion: string) {
    let element = this.elRef.nativeElement.querySelector(`#${seccion}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
