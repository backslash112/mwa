import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-farmers-market></app-farmers-market>`,
  providers: [ ]
})
export class AppComponent {
  title = 'Farmer\'s Market App';
}
