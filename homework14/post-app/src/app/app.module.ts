import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewpostComponent } from './newpost.component';
import { DataserviceService } from './dataservice.service';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewpostComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [FormBuilder, DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
