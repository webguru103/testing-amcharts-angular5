import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmChartsModule } from "@amcharts/amcharts3-angular";

import { AmChartsRoutingModule } from './amcharts-routing.module';
import { AmChartsComponent } from './amcharts.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    declarations: [AmChartsComponent],
    imports: [CommonModule, AmChartsModule, AmChartsRoutingModule, PageHeaderModule],
    entryComponents: [AmChartsComponent]
})
export class AmModule {}