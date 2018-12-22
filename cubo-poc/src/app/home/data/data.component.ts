import { Component, Input } from '@angular/core';
import { PersonParticipationModel } from '../shared/models/person.model';

@Component({
    selector: 'app-data-form',
    templateUrl: './data.component.html',
    styleUrls: [
        './data.component.scss'
    ]
})

export class DataComponent {
    @Input() persons: PersonParticipationModel[];

    headerTable: string[] = [
        'First name',
        'Last name',
        'Participation'
    ];
}
