import { Component, OnInit } from '@angular/core';
import { DbService } from '../farmers-market/db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-farm-details',
  template:
  `
  <h3>{{ farm.farm }}</h3>
  <ul>
    <li *ngFor="let item of farm.produce"> {{ item }}</li>
  </ul>
`
})
export class FarmDetailsComponent implements OnInit {

  farm: { _id: number, farm: string, produce: string[] };
  constructor(private dbService: DbService, private activatedRoute: ActivatedRoute) {

  }
  // 
  // onNavigate() {
  //   this.router.navigate('/error')
  // }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const farmId = params['id'];
      this.farm = this.dbService.getDataById(farmId);
    });

  }

}
