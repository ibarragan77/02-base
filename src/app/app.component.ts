import { Component } from '@angular/core';
import {CounterComponent} from './counter/components/counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent {
  title = 'Hola Mundo';

}
