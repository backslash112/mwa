import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }
  getData() {
    return [
      {_id: 1, Farm: 'Natural Prairie1', produce: ['lettuce1', 'tomato1']},
      {_id: 2, Farm: 'Natural Prairie2', produce: ['lettuce2', 'tomato2']}
    ]
  }
}
