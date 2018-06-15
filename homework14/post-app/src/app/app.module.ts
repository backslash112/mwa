import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewpostComponent } from './newpost.component';
import { DataserviceService } from './dataservice.service';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserHttpServiceService } from './user-http-service.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NewpostComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [FormBuilder, DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
