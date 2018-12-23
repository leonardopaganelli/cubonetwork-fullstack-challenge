
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { DefaultTableComponent} from './default-table/default-table.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
    imports: [
        CommonModule,
        NgxChartsModule
    ],
    declarations: [
        DonutChartComponent,
        DefaultTableComponent
    ],
    exports: [
        DonutChartComponent,
        DefaultTableComponent,
        CommonModule
    ],
})

export class SharedModule { }
