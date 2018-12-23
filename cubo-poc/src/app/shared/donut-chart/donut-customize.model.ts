import { DonutDataModel } from './donut.model';

export class DonutCustomizeModel {
    view: number[];
    scheme: {
        domain: string[]
    };
    results: DonutDataModel[];
    legend: boolean;
    labels: boolean;
    doughnut: true;
    tooltipDisabled: boolean;
}
