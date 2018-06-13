import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {

  @Input() items: string[];
  color: string;
  constructor() { }
  
  ngOnInit() {
  }

  selectedColor(color) {
    this.color = color;
    console.log(color);
  }
}
