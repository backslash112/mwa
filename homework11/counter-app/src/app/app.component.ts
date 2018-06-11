import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h3>{{ title }}</h3> \
              <app-counter counter="10" (counterChanged)="onCounterChanged($event)"></app-counter>',
  styles: []
})
export class AppComponent {
  title = 'app';

  onCounterChanged(newValue) {
    console.log(newValue);
    this.title = newValue;
  }
}
