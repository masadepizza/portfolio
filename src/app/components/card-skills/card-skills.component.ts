import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-skills',
  templateUrl: './card-skills.component.html',
  styleUrl: './card-skills.component.css'
})
export class CardSkillsComponent {

  @Input() titulo!:string;
  @Input() imagenes!:string[];
  @Input() tecnologias!: string[];

  hoveredIndex: number | null = null;

  showTechnologyName(index: number): void {
    this.hoveredIndex = index;
  }

  hideTechnologyName() {
    this.hoveredIndex = null;
  }
}
