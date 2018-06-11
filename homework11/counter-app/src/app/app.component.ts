import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h3>{{ title }}</h3> \
              <app-counter></app-counter>',
  styles: []
})
export class AppComponent {
  title = 'app';
}
