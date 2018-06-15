import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserHttpServiceService } from './user-http-service.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserHttpServiceService) { 
    this.myForm = fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      post: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log('onSubmit clicked!');
    console.log(this.myForm.value);
  }

  onGetData(): void {
    console.log('onGetData clicked!');
    this.userService.getData().subscribe(data => {
      console.log(data);
      this.myForm.controls.name.setValue(data.name);
      this.myForm.controls.email.setValue(data.email);
      this.myForm.controls.post.setValue(data.post);
    });
  }
}
