import { Component, Input, OnChanges } from '@angular/core';
import { DonutDataModel } from './donut.model';
import { DonutCustomizeModel } from './donut-customize.model';

@Component({
    selector: 'app-donut-chart',
    templateUrl: './donut-chart.component.html',
    styleUrls: [
        './donut-chart.component.scss'
    ]
})

export class DonutChartComponent implements OnChanges {
    @Input() data: DonutDataModel[];

    customChart: DonutCustomizeModel = {
        view: [
            280,
            280
        ],
        scheme: {
            domain: [
                '#bcc2c7',
                '#9c56b8',
                '#ea4b35',
                '#15ba9a',
                '#2c96dd',
                '#f4f806',
                '#f86a06',
                '#875203'
            ]
        },
        results: [],
        legend: false,
        labels: false,
        doughnut: true,
        tooltipDisabled: true
    };

    ngOnChanges() {
        this.customChart.results = this.data;
    }
}
