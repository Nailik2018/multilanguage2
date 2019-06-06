import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SensorsOverviewComponent} from "./sensors-overview.component";
import { SensorTablesComponent } from './sensor-tables/sensor-tables.component';

@NgModule({
  declarations: [
    SensorsOverviewComponent,
    SensorTablesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SensorsOverviewModule { }
