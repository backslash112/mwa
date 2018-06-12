import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {

  @Input() items: string[];
  constructor() {
   
   }


  ngOnInit() {
  }

}
