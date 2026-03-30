import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-child />
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  imports: [],
})
export class App {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
