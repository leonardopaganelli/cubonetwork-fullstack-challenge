import { Component, Input, OnChanges } from '@angular/core';
import { PersonParticipationModel } from '../shared/models/person.model';
import { DonutDataModel } from '../../shared/donut-chart/donut.model';

@Component({
    selector: 'app-data-form',
    templateUrl: './data.component.html',
    styleUrls: [
        './data.component.scss'
    ]
})

export class DataComponent implements OnChanges {
    @Input() persons: PersonParticipationModel[];
    donutData: DonutDataModel[] = [];
    headerTable: string[] = [
        'First name',
        'Last name',
        'Participation'
    ];

    ngOnChanges() {
        this.donutData = this.persons.map(this.mapDonutData);
    }

    mapDonutData(data: PersonParticipationModel): DonutDataModel {
        return {
            name: `${data.firstName} ${data.lastName}`,
            value: data.participation
        }
    }
}
