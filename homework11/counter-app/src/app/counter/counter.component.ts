import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counterValue: float;
  constructor() {
    this.counterValue = 0;
  }

  ngOnInit() {
  }

  onDecrease() {
    this.counterValue--;
  }

  onIncrease() {
    this.counterValue++;
  }

}
