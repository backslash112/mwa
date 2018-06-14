import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  _data: { _id: number, farm: string, produce: string[] }[];

  constructor() { 
    this._data = [
      {_id: 1, farm: 'Natural Prairie', produce: ['lettuce', 'tomato']},
      {_id: 2, farm: 'Everybody', produce: ['cabbage', 'potato']}
    ];
  }
  getData() {
    return this._data;
  }
  
  getDataById(id: number) {
    return this._data.find(item => item._id == id);
  }
}
