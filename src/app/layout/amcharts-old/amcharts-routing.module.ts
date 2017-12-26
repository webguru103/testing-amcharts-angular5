import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmChartsComponent } from './amcharts.component';

const routes: Routes = [
    {
        path: '',
        component: AmChartsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AmChartsRoutingModule {}