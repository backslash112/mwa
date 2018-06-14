import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmDetailsComponent } from './farm-details.component';
import { FarmsComponent } from './farms.component';
import { FarmersMarketComponent  } from "./farmers-market.component";
import { DbService } from './db.service';
import { MyRoutes } from './farmers-market.routes';
import { ErrorComponent } from './error.component';

@NgModule({
  imports: [
    CommonModule,
    MyRoutes
  ],
  declarations: [
    FarmsComponent,
    FarmDetailsComponent,
    FarmersMarketComponent,
    ErrorComponent
  ],
  providers: [DbService],
  exports: [FarmersMarketComponent]
})
export class FarmersMarketModule {

 }
