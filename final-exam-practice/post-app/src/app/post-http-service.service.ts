import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostHttpServiceService {

  constructor(public http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userld=1');

    // return new Observable(observer => {      
    //   postObservable.subscribe(posts => {
    //     observer.next(posts);
    //   });
    // });
  }

}
