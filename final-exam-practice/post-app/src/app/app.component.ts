import { Component } from '@angular/core';
import { PostHttpServiceService } from './post-http-service.service';

@Component({
  selector: 'app-root',
  template: `<input class="form-control" type="text" (input)="textChanged($event.target.value)" required>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" *ngFor="let item of posts">
      <app-mypost [title]='item.title'></app-mypost>
    </li>
  </ul>`,
  styles: ['']
})
export class AppComponent {
  posts: { title: string, body: string }[];
  totalPosts:  { title: string, body: string }[];
  constructor(private postService: PostHttpServiceService) {
    
  }
  ngOnInit() {
    console.dir(this.postService);
    this.postService.getData().subscribe(posts => {
      this.totalPosts = posts;
    });
  }
  textChanged(text: string) {
    console.log(text);
    this.posts = this.totalPosts.filter(p => p.title.includes(text));
  }
}
