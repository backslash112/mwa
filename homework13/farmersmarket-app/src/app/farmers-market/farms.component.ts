import { Component, OnInit } from '@angular/core';
import { DbService } from '../farmers-market/db.service';

@Component({
  selector: 'app-farms',
  template:`
  <p>
    farms works!
  </p>
  <ul>
    <li *ngFor='let item of farms'>
      <a [routerLink]="['farm', item._id]" [replaceUrl]='true'> {{ item.farm }} </a>
    </li>
  </ul>


  `})
export class FarmsComponent implements OnInit {

  farms: { _id: number, farm: string, produce: string[] }[] = [];

  constructor(private dbService: DbService) {
  }

  ngOnInit() {
    console.log('init');
    this.farms = this.dbService.getData();
  }

}
