import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FarmsComponent } from './farms/farms.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmsComponent,
    FarmDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
