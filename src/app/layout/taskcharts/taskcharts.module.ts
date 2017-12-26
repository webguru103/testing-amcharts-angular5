import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmChartsModule } from "@amcharts/amcharts3-angular";

import { TaskchartsRoutingModule } from './taskcharts-routing.module';
import { TaskchartsComponent } from './taskcharts.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    AmChartsModule,
    TaskchartsRoutingModule,
    PageHeaderModule
  ],
  declarations: [TaskchartsComponent]
})
export class TaskchartsModule { }
