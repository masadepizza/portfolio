import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-proyectos',
  templateUrl: './card-proyectos.component.html',
  styleUrl: './card-proyectos.component.css'
})
export class CardProyectosComponent {

  @Input() titulo!:string;
  @Input() descripcion!:string;
  @Input() video!:string;
  @Input() footer1!:string;
  @Input() footer2!:string;
  @Input() GithubProyecto!: string;
  @Input() LinkProyecto!: string;
}
