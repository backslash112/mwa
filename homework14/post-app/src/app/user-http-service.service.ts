import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, zip } from 'rxjs';
// import { zip } from 'rxjs/operators';
// import { zip } from 'rxjs/observable/zip';
// import { zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserHttpServiceService {

  constructor(public http: HttpClient) { }

  getData(): Observable<{ name: string, email: string, post: string }> {
    const userObservable = this.http.get('https://jsonplaceholder.typicode.com/users/1');
    const postObservable = this.http.get('https://jsonplaceholder.typicode.com/posts?userld=1');

    return new Observable(observer => {      
      zip(userObservable, postObservable).subscribe(data => {
        console.log(data[0]);
        console.log(data[1]);
        observer.next({ name: data[0]['name'], email: data[0]['email'], post: data[1][0].body});
      });
    });
  }
}
