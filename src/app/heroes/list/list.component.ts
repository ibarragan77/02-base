import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroeNames: string[] = ['Spiderman', 'Ironman','Hulk', 'Batman', 'Flash'];
  public daleteHero?: string;

  removeLastHeroe():  void {
    this.daleteHero = this.heroeNames.pop();
  }

}
