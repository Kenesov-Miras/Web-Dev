import {Component} from '@angular/core';
import {ReversePipe} from './task24-2';

@Component({
  selector: 'app-root',
  template: ` Reverse Machine: {{ word | reverse }} `,
  imports: [ReversePipe],
})
export class App {
  word = 'You are a champion';
}
