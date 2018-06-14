import { RouterModule, Routes } from "@angular/router";

import { FarmsComponent } from "./farms.component";
import { FarmDetailsComponent } from "./farm-details.component";
import { FarmersMarketGuard } from "./farmers-market.guard";
import { ErrorComponent } from "./error.component";

const MY_ROUTES: Routes = [
    { path: 'farms', component: FarmsComponent },
    { path: 'farms/farm/:id', component: FarmDetailsComponent, canActivate: [ FarmersMarketGuard ]},
    { path: 'error', component: ErrorComponent }
]

export const MyRoutes = RouterModule.forRoot(MY_ROUTES);
