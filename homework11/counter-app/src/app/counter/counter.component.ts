import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  // counterValue: number;
  @Input() counter: number;
  @Output() counterChanged: EventEmitter<number>;
  

  constructor() {
    // this.counterValue = 0;
    this.counterChanged = new EventEmitter();
  }

  ngOnInit() {
    // this.counterValue = this.counter;
  }

  onDecrease() {
    this.counter--;
    this.counterChanged.emit(this.counter);
  }

  onIncrease() {
    this.counter++;
    this.counterChanged.emit(this.counter);
  }

}
