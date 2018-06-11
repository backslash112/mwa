import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h3>component Counter Value = {{ componentCounterValue }}</h3> \
              <app-counter counter="{{ componentCounterValue }}" (counterChanged)="onCounterChanged($event)"></app-counter>',
  styles: []
})
export class AppComponent {
  componentCounterValue: number;

  constructor() {
    this.componentCounterValue = 10;
  }
  onCounterChanged(newValue) {
    console.log(newValue);
    this.componentCounterValue = newValue;
  }
}
