import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    { name: 'Trunks', power: 10  },
  ];

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();


  // onDelete(index: number): void{
  //   this.onDeleteCharacter.emit(index);
  // }

  onDeleteById(id?: string): void {
    if ( !id ) return;
    this.onDeleteCharacterById.emit(id);
  }



}
