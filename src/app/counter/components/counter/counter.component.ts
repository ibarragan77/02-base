// import {Component} from '@angular/core';
//
// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola counter</h1>'
//   })
// export class CounterComponent {
//
// }


import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '<h3>Counte: {{ counter }}</h3>\n' +
    '<button (click)="increaseBy()">+1</button>\n' +
    '<button (click)="resetBy()">Reset</button>\n' +
    '<button (click)="decreaseBY()">-1</button>',
  standalone: false
})
export class CounterComponent {

  counter: number = 10;
  increaseBy(): void {
    this.counter += 1;
  }

  decreaseBY(): void {
    this.counter -= 1;
  }

  resetBy(): void {
    this.counter = 10;
  }

}
