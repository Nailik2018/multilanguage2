import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensorsOverviewComponent } from "./pages/sensors-overview/sensors-overview.component";
import { InstallationComponent } from "./pages/installation/installation.component";

const routes: Routes = [
  { path: 'sensors-overview', component: SensorsOverviewComponent },
  { path: 'installation', component: InstallationComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
