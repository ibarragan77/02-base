import {Injectable} from '@angular/core';
import { v4 as uuid } from 'uuid';

import {Character} from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    { name: 'Krillin', power: 1000, id: uuid() },
    { name: 'Goku', power: 9500, id: uuid()},
    { name: 'Vegeta', power: 7500, id: uuid()},
  ];

  addCharacter(character: Character): void {
    const newCharacter = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  };

  // onDeleteCharacter(index: number): void {
  //   console.log(index);
  //   this.characters.splice(index, 1);
  // };

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  };
}
