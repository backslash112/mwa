import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mypost',
  template: `
    <p>
      {{ title }}
    </p>
  `,
  styles: []
})
export class MypostComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit() {

  }

}
