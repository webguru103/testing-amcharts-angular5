import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskchartsComponent } from './taskcharts.component';

const routes: Routes = [
    {
        path: '',
        component: TaskchartsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskchartsRoutingModule { }
